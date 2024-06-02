import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";

function Admin() {
  const apiUrl = "https://todonodeserver.elaloeyfoundry.com";
  const auth = getAuth();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
  });
  const { name } = formData;
  const [showTable, setShowTable] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(4);

  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };

  const onViewReg = () => {
    setShowTable(!showTable);
  };

  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(`${apiUrl}/fetchUsers`);
        //const response = await fetch(`http://localhost:4000/fetchUsers`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchUsers();
  }, []);

  const downloadExcel = async () => {
    try {
      const response = await fetch(`${apiUrl}/fetchUsers`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const allUsers = await response.json();

      const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      const fileExtension = ".xlsx";
      const fileName = "users_data";

      const exportData = allUsers.map((user) => ({
        "Full Name": user.full_name,
        Email: user.email,
        "Phone No": user.phone,
        Gender: user.gender,
      }));

      const ws = XLSX.utils.json_to_sheet(exportData);
      const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
      const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
      const data = new Blob([excelBuffer], { type: fileType });
      const url = URL.createObjectURL(data);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = fileName + fileExtension;
      anchor.click();
    } catch (error) {
      console.error("Error downloading Excel:", error);
    }
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="bg-cover h-[100px] sm:h-[200px] flex items-center justify-center bg-[url('https://t4.ftcdn.net/jpg/05/71/83/47/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg')]">
        <h1 className="text-white font-bold text-3xl sm:text-4xl font-montserrat">
          Admin Page
        </h1>
      </div>
      <section className="max-w-4xl mx-auto flex justify-center items-center flex-col text-gray-300 px-4 sm:px-0">
        <h1 className="text-2xl sm:text-3xl text-center mt-6 font-bold">
          Welcome {name}
        </h1>
        <div className="flex flex-wrap justify-center sm:justify-between whitespace-nowrap text-sm sm:text-lg my-6 gap-3 w-full sm:w-auto">
          <div
            onClick={onLogout}
            className="text-gray-300 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer text-center bg-green-500 w-36 h-12 p-2 rounded-full"
            aria-label="Sign out"
          >
            Sign out
          </div>
          <div
            onClick={onViewReg}
            className="text-gray-300 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer text-center bg-green-500 w-36 h-12 p-2 rounded-full"
            aria-label="View Registrations"
          >
            View Reg
          </div>
          <div
            onClick={downloadExcel}
            className="text-gray-300 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer text-center bg-green-500 w-36 h-12 p-2 rounded-full"
            aria-label="Download Excel"
          >
            Download Excel
          </div>
        </div>
        {error && <div className="text-red-500">{error}</div>}
        {showTable && (
          <div className="my-5 w-full overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-green-300 font-bold text-black">
                <tr>
                  <th
                    scope="col"
                    className="px-2 sm:px-6 py-3 text-left text-xs uppercase tracking-wider"
                  >
                    Full Name
                  </th>
                  <th
                    scope="col"
                    className="px-2 sm:px-6 py-3 text-left text-xs uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-2 sm:px-6 py-3 text-left text-xs uppercase tracking-wider"
                  >
                    Phone No
                  </th>
                  <th
                    scope="col"
                    className="px-2 sm:px-6 py-3 text-left text-xs uppercase tracking-wider"
                  >
                    Gender
                  </th>
                  <th
                    scope="col"
                    className="px-2 sm:px-6 py-3 text-left text-xs uppercase tracking-wider"
                  >
                    Social Media
                  </th>
                  <th
                    scope="col"
                    className="px-2 sm:px-6 py-3 text-left text-xs uppercase tracking-wider"
                  >
                    Home Address
                  </th>
                  <th
                    scope="col"
                    className="px-2 sm:px-6 py-3 text-left text-xs uppercase tracking-wider"
                  >
                    Educational Qulification
                  </th>
                  <th
                    scope="col"
                    className="px-2 sm:px-6 py-3 text-left text-xs uppercase tracking-wider"
                  >
                    Work Experience
                  </th>
                  <th
                    scope="col"
                    className="px-2 sm:px-6 py-3 text-left text-xs uppercase tracking-wider"
                  >
                    Problem
                  </th>
                  <th
                    scope="col"
                    className="px-2 sm:px-6 py-3 text-left text-xs uppercase tracking-wider"
                  >
                    Solution
                  </th>
                  <th
                    scope="col"
                    className="px-2 sm:px-6 py-3 text-left text-xs uppercase tracking-wider"
                  >
                    Industry
                  </th>
                  <th
                    scope="col"
                    className="px-2 sm:px-6 py-3 text-left text-xs uppercase tracking-wider"
                  >
                    Stage
                  </th>
                  <th
                    scope="col"
                    className="px-2 sm:px-6 py-3 text-left text-xs uppercase tracking-wider"
                  >
                    Investor
                  </th>
                  <th
                    scope="col"
                    className="px-2 sm:px-6 py-3 text-left text-xs uppercase tracking-wider"
                  >
                    Challenges
                  </th>
                  <th
                    scope="col"
                    className="px-2 sm:px-6 py-3 text-left text-xs uppercase tracking-wider"
                  >
                    Expectations
                  </th>
                  <th
                    scope="col"
                    className="px-2 sm:px-6 py-3 text-left text-xs uppercase tracking-wider"
                  >
                    Date Reg
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-black">
                {currentUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                      {user.db_fullname}
                    </td>
                    <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                      {user.db_email}
                    </td>
                    <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                      {user.db_phone}
                    </td>
                    <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                      {user.db_gender}
                    </td>
                    <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-sm">
                      {user.db_social_med}
                    </td>
                    <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-sm">
                      {user.db_home_add}
                    </td>
                    <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-sm">
                      {user.db_edu}
                    </td>
                    <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-sm">
                      {user.db_experi}
                    </td>
                    <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-sm">
                      {user.db_prob}
                    </td>
                    <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-sm">
                      {user.db_sol}
                    </td>
                    <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-sm">
                      {user.db_industry}
                    </td>
                    <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-sm">
                      {user.db_stage}
                    </td>
                    <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-sm">
                      {user.db_investor}
                    </td>
                    <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-sm">
                      {user.db_challenge}
                    </td>
                    <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-sm">
                      {user.db_expect}
                    </td>
                    <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-sm">
                      {user.created_at}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 flex justify-center">
              {Array.from({
                length: Math.ceil(users.length / usersPerPage),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`mx-1 px-3 py-1 border border-gray-300 rounded ${
                    currentPage === index + 1
                      ? "bg-green-300 text-black"
                      : "bg-white text-black"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Admin;

import { Typography } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userSingleDetails } from "../../../Redux/Actions/ServiceAction";
<<<<<<< HEAD

// import Data1 from "../../ServiceItem/Data1";

const UserDetailPage = () => {
  // const [info, setInfo] = useState();
  // const navigate = useNavigate();
  // const callUserdetails = async () => {
  //   try {
  //     const res = await fetch("/user_detail", {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       credentials: "include",
  //     });
  //     const data = await res.json();
  //     setInfo(data);
  //     if (!res.status === 200) {
  //       const error = new Error(res.error);
  //       throw error;
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     navigate("/login");
  //   }
  // };
=======

const UserDetailPage = () => {
>>>>>>> 353983f260a9bf8a68d80e6f5296b7964871d00b
  const dispatch = useDispatch();
  const singleData = useSelector((state) => state.singleData);
  const { user } = singleData;

  useEffect(() => {
    dispatch(userSingleDetails());
  }, [dispatch]);

  return (
    <div>
      <Typography.Title
        style={{
          textAlign: "left",
          margin: "30px 35px",
          fontSize: "30px",
          fontFamily: "Poppins",
        }}
      >
        User Details
      </Typography.Title>

      {/* --------------------------- tabel ------------------------------------- */}
      <div>
        <div
          style={{
            display: "flex",
            width: "95%",
            justifyContent: "center",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <div
            class="header_fixed ml-3"
            style={{
              justifyContent: "center",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <table>
              <thead className="text-dark">
                <tr>
                  <th>Name</th>
                  <th>Email ID</th>
                  <th>Age</th>
                  <th>Phone no</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{user.fname}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>{user.phone_no}</td>
                  <td>
                    <Link to="/profile/usersdetail/edituserdetail">
                      <i
                        class="fa-solid fa-pen edit-icons icons-1"
                        style={{
                          cursor: "pointer",
                          // marginRight: "30px",
                          paddingRight: "30px",
                        }}
                      ></i>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;

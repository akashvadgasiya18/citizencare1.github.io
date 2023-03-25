import { Typography } from "antd";
<<<<<<< HEAD
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userSingleDetails } from "../../../Redux/Actions/ServiceAction";
=======
>>>>>>> 9eabc4b19469e15c0420642606c649e11c37ff11

// import Data1 from "../../ServiceItem/Data1";

const UserDetailPage = () => {
<<<<<<< HEAD
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
  const dispatch = useDispatch();
  const singleData = useSelector((state) => state.singleData);
  const { user } = singleData;

  useEffect(() => {
    dispatch(userSingleDetails());
  }, [dispatch]);

=======
>>>>>>> 9eabc4b19469e15c0420642606c649e11c37ff11
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
<<<<<<< HEAD
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
=======
        <div className="card" style={{ display: "flex", width: "95%" }}>
          <form method="get">
          {/* <input type="button" value="refresh" onClick={callUserdetails}/> */}
            <div class="header_fixed">
              <p>{ info.fname }</p>
              <p>{ info.email }</p>
              <p>{ info.age }</p>
              <p>{ info.phone_no }</p>
              {/* <table>
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
                    <td>{ info.fname }</td>
                    <td>{ info.email }</td>
                    <td>{ info.age }</td>
                    <td>{ info.phone_no }</td>
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
>>>>>>> 9eabc4b19469e15c0420642606c649e11c37ff11
                      <i
                        class="fa-solid fa-pen edit-icons icons-1"
                        style={{
                          cursor: "pointer",
                          // marginRight: "30px",
                          paddingRight: "30px",
                        }}
                      ></i>
<<<<<<< HEAD
                    </Link>
                    <i
                      class="fa-solid fa-trash edit-icons icons-2"
                      style={{
                        color: "#ce3d3d",
                        cursor: "pointer",
                      }}
                    ></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
=======
                    </td>
                  </tr>
                </tbody>
              </table> */}
            </div>
          </form>
>>>>>>> 9eabc4b19469e15c0420642606c649e11c37ff11
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;

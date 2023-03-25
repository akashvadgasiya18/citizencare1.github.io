import { Typography } from "antd";
import { useEffect ,useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import Data1 from "../../ServiceItem/Data1";

const UserDetailPage = () => {
  const [info, setInfo] = useState();
  const navigate = useNavigate();
  const callUserdetails = async () => {
    try {
      const res = await fetch("/user_detail" , {
        method: "GET",
        headers : {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      const data = await res.json();
      setInfo(data);
      if(!res.status === 200)
      {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  useEffect(() => {
    callUserdetails();
  });
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
        <div className="card" style={{ display: "flex", width: "95%" }}>
          <form method="get">
          {/* <input type="button" value="refresh" onClick={callUserdetails}/> */}
            <div class="header_fixed">
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;

import React, { useContext } from "react";
import GeneralUserContext from "../../contexts/generalUserContext";

function CoachInfo(props) {
  const { userCoach } = useContext(GeneralUserContext);
  return (
    <div class="container">
      <div class="main-body">
        <div className="card2">
          <div className="card2-body">
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Id Type</h2>
              </div>
              <div className="col-sm-9 text-secondary">CC</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Id Number</h2>
              </div>
              <div className="col-sm-9 text-secondary">{userCoach.dni}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Full Name</h2>
              </div>
              <div className="col-sm-9 text-secondary">
                {userCoach.name} {userCoach.lastname}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Birthday</h2>
              </div>
              <div className="col-sm-9 text-secondary">
                {userCoach.birthday}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Email</h2>
              </div>
              <div className="col-sm-9 text-secondary">{userCoach.email}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Mobile </h2>
              </div>
              <div className="col-sm-9 text-secondary">{userCoach.phone}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-12">
                <button className="btn btn-primary btn-sm" type="submit">
                  <strong>EDIT</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoachInfo;

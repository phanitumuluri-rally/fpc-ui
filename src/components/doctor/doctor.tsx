import React, { FunctionComponent } from 'react';
import { IDoctor } from '../../models/doctor';
import './doctor.css';

export type DoctorProps = {
  doctor: IDoctor;
};

const Doctor: FunctionComponent<DoctorProps> = ({doctor}) => {
  return <div className="container ProviderList">
    <div className="flex doctor">
      <div>
        <img src="images/user.svg" />
      </div>
      <div className="align-center column">
        <h4><a href={"/doctors/" + doctor.user.id} >{doctor.user.firstName}, {doctor.user.lastName}, {doctor.user.designation}</a></h4>
        <div>{doctor.specialities.map(s => s.speciality).join(', ')}</div>
        <div>{doctor.address.address1}</div>
        <div>{doctor.address.address2} {doctor.address.zipCode}</div>
        <div>{doctor.address.phone} PHONE</div>
        <div><small>0.7 Miles Away</small></div>
        <div><small>View Additional Locations (6)</small></div>
        <div><small>View Enrollment Information</small></div>
      </div>
      <div className="flex justify-center layout-column">
        <div><small>Not Evaluated For Premium Care</small></div>
        <div><small>Accepting All Patients</small></div>
      </div>
    </div>
    <div className="col-sm-12 botDetails">
      Office Visit - Primary Doctor - Established Patient - Moderate Complexity
    </div>
  </div>;
};

export default Doctor;

import React, { useState, useEffect } from 'react';
import { get } from '../../services/http';
import { useParams } from 'react-router-dom';
import { ISerivce } from '../../models/service';
import { IUser } from '../../models/user';
import { ISpeciality } from '../../models/speciality';

type IDoctorDetails = {
  doctor: IUser;
  services: ISerivce[];
  specialities: ISpeciality[];
}


const DoctorDetails = () => {
  const [doctorDetails, setDoctorDetails] = useState<IDoctorDetails>();
  const {doctorId} = useParams();

  useEffect(() => {
    const url = `doctors/${doctorId}`;
    get(url).then(async (res: IDoctorDetails) => {
      setDoctorDetails(res);
    });
  }, [doctorId]);

  return <div className="providerContainer container">
    <div className="row ProviderDetails">
        <div className="col-lg-9">
            <div className="media">
                <img className="mr-3" src="/images/user.svg" alt="Doctor" />
                <div className="media-body">
                    <h1 className="mt-0">{doctorDetails?.doctor.firstName}, {doctorDetails?.doctor.lastName}, {doctorDetails?.doctor.designation}<span>{doctorDetails?.specialities.map(s => s.speciality).join(', ')}</span></h1>
                </div>
            </div>
        </div>

    </div>

    <div className="row">
        <div className="col-sm-12">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link inactiveLink" id="overview-tab" data-toggle="tab" href="#overview" role="tab"
                        aria-controls="home" aria-selected="false">OVERVIEW</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" id="services-tab" data-toggle="tab" href="#servicesCost"
                        role="tab" aria-controls="profile" aria-selected="true">SERVICES & COSTS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link inactiveLink" id="location-tab" data-toggle="tab" href="#location" role="tab"
                        aria-controls="contact" aria-selected="false">LOCATIONS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link inactiveLink" id="patientReview-tab" data-toggle="tab" href="#patientReview"
                        role="tab" aria-controls="contact" aria-selected="false">PATIENT REVIEWS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link inactiveLink" id="enrollment-tab" data-toggle="tab" href="#enrollment" role="tab"
                        aria-controls="contact" aria-selected="false">ENROLLMENT INFORMATION</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade" id="overview" role="tabpanel" aria-labelledby="contact-tab"> 1 </div>

                <div className="tab-pane fade show active" id="servicesCost" role="tabpanel" aria-labelledby="profile-tab">
                      
                                <div className="row titleHeading">
                                    <div className="col-sm-4">Services</div>
                                    <div className="col-sm-2">Cost Near 55442</div>
                                    <div className="col-sm-2">Estimated Total Cost </div>
                                    <div className="col-sm-2">Insurance Pays </div>
                                    <div className="col-sm-2">Estimated Out-of-Pocket Cost</div>
                                </div>
                                {doctorDetails?.services.map(service => <div key={service.id} className="row costDetails">
                                    <div className="col-sm-4">{service.service}</div>
                                    <div className="col-sm-2">${service.minimumCost} - ${service.minimumCost}</div>
                                    <div className="col-sm-2">Below Average Cost</div>
                                    <div className="col-sm-2">* N/A </div>
                                    <div className="col-sm-2">* N/A</div>
                                  </div>
                                )}
                                
                                
                            
                </div>
                <div className="tab-pane fade" id="location" role="tabpanel" aria-labelledby="contact-tab"> 3 </div>
                <div className="tab-pane fade" id="patientReview" role="tabpanel" aria-labelledby="profile-tab"> 4 </div>
                <div className="tab-pane fade" id="enrollment" role="tabpanel" aria-labelledby="contact-tab"> 5
                </div>
            </div>

        </div>

    </div>

  </div>;
};

export default DoctorDetails;

import React, { useState, useEffect } from 'react';
import Doctor from '../../components/doctor/doctor';
import { get } from '../../services/http';
import { IDoctor } from '../../models/doctor';
import DoctorSearch from '../../components/doctor-search/doctor-search';


const Doctors = () => {
  const [doctors, setDoctors] = useState<IDoctor[]>([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = (search: string|null = null) => {
    let url = 'doctors';
    if (search) {
      url = url + '?name=' + search;
    }
    get(url).then(async (res: IDoctor[]) => {
      setDoctors(res);
    });
  };

  return <div>
    <div className="container topHeader">
        <div className="row">
            <div className="col-lg-12">
                <h1>Who are you looking for?</h1>
            </div>
        </div>
    </div>
    <DoctorSearch  onChange={fetchDoctors} />
    {doctors.map((doctor, i) => <Doctor key={i} doctor={doctor} />)}
    </div>;
};

export default Doctors;

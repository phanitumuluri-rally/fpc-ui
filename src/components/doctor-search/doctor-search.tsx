import React, { FunctionComponent } from 'react';

export type DoctorSearchProps = {
  onChange: (search: string) => void;
};


const DoctorSearch: FunctionComponent<DoctorSearchProps> = ({onChange}) => {
  return <div className="bg-default feature">
      <div className="container showSearchContainer">
          <div className="row">
              <div className="col-lg-12">
                  <form className="example" action="action_page.php">
                      <input onInput={(e) => onChange((e.target as HTMLInputElement).value)} type="text" placeholder="Search for health care providers..." name="search" />
                      <a className="searchBTN" type="">Search<i className="fa fa-search"></i></a>
                  </form>
              </div>
          </div>
      </div>
  </div>
};

export default DoctorSearch;

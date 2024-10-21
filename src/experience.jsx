import React from "react";

const Experience = () => {
  return (
    <>
      <div class="container  mt-5 text-light">
        <h2 class="mb-4 text-center">Experience</h2>

        <div class="experience-item">
          <div class="d-flex justify-content-between">
            <div>
              <h3 class="company-name">5P Media</h3>
              <p class="role">User Experience Engineer</p>
            </div>
            <h4 class="dates">Jun 2023 — Present</h4>
          </div>
        </div>

        <div class="experience-item">
          <div class="d-flex justify-content-between">
            <div>
              <h3 class="company-name">Theta Technolabs Pvt Ltd</h3>
              <p class="role">UX-UI Engineer Trainee</p>
            </div>
            <h4 class="dates">Jan 2023 — Jun 2023</h4>
          </div>
        </div>

        <div class="experience-item">
          <div class="d-flex justify-content-between">
            <div>
              <h3 class="company-name">Squareknot.in Pvt Ltd</h3>
              <p class="role">Motion Desiger</p>
            </div>
            <h4 class="dates">Jun 2021 — Aug 2021</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;

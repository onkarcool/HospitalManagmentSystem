import React from 'react';
import './WhyChoose.css';
import buildingImage from '../icons/BuildingSH.jpg'; // Use a relative path

const WhyChoose = () => {
  return (
    <section className="why-choose">
      <div className="why-choose-content">
        <h2>Why Choose Sahyadri Hospitals?</h2>
        <p>
          Sahyadri Hospitals, the Largest Chain of Hospital Network in Western India was established in the year 1994 with Pune Institute of Neurology exclusively dedicated to Neurology and Neurosurgery. Over the years, Sahyadri Hospitals has spread its footprint and currently has a chain of 9 hospitals spread across Pune, Nashik, and Karad.
        </p>
        <div className="stats">
          <div className="stat-item">
            <img src="/icons/hospital.svg" alt="Hospitals" />
            <span>9</span>
            <p>Hospitals Across Maharashtra</p>
          </div>
          <div className="stat-item">
            <img src="/icons/lab.svg" alt="Lab" />
            <span>50+</span>
            <p>Lab Collection Centres</p>
          </div>
          <div className="stat-item">
            <img src="/icons/clinician.svg" alt="Clinicians" />
            <span>2000+</span>
            <p>Clinicians</p>
          </div>
          <div className="stat-item">
            <img src="/icons/experience.svg" alt="Experience" />
            <span>30+</span>
            <p>Years Of Experience</p>
          </div>
          <div className="stat-item">
            <img src="/icons/staff.svg" alt="Staff" />
            <span>4000+</span>
            <p>Expert Staff</p>
          </div>
          <div className="stat-item">
            <img src="/icons/bed.svg" alt="Bed Capacity" />
            <span>1000+</span>
            <p>Bed Capacity</p>
          </div>
        </div>
      </div>
      <div className="why-choose-image">
        <img src={buildingImage} alt="Sahyadri Hospital Building" />
      </div>
    </section>
  );
};

export default WhyChoose; 
"use client";

import React from 'react';
import MapLocation from '../../../shared/map-location/MapLocation'
import InstructorsClient from '../../../appPages/Instructors/InstructorClient';
function page() {
  return (
    <>
      <InstructorsClient />

      <MapLocation />
    </>
  );
}

export default page;
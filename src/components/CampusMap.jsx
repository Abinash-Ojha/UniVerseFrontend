import React from 'react';

const CampusMap = () => {
  return (
    <svg
      width="2000"
      height="1200"
      viewBox="0 0 2000 1200"
      xmlns="http://www.w3.org/2000/svg"
      style={{ background: '#f5f1e8' }}
    >
      {/* Main Vertical Road (Left Side) */}
      <rect
        x="80"
        y="0"
        width="100"
        height="1200"
        fill="#d4d4d4"
        stroke="#b8b8b8"
        strokeWidth="2"
      />
      
      {/* GIET Road (Horizontal - Main Entrance) */}
      <rect
        x="180"
        y="380"
        width="1820"
        height="100"
        fill="#d4d4d4"
        stroke="#b8b8b8"
        strokeWidth="2"
      />
      
      {/* Road Intersection */}
      <rect
        x="80"
        y="380"
        width="100"
        height="100"
        fill="#c8c8c8"
      />
      
      {/* Secondary Vertical Roads */}
      <rect
        x="800"
        y="0"
        width="80"
        height="380"
        fill="#e0e0e0"
        stroke="#b8b8b8"
        strokeWidth="1"
      />
      
      <rect
        x="800"
        y="480"
        width="80"
        height="720"
        fill="#e0e0e0"
        stroke="#b8b8b8"
        strokeWidth="1"
      />
      
      {/* Administrative Block (Near Entrance) */}
      <rect
        x="250"
        y="520"
        width="200"
        height="150"
        fill="#a8c5dd"
        stroke="#7099b8"
        strokeWidth="3"
        rx="8"
      />
      <text
        x="350"
        y="585"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="16"
        fontWeight="bold"
      >
        Administrative
      </text>
      <text
        x="350"
        y="605"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="16"
        fontWeight="bold"
      >
        Block
      </text>
      
      {/* Central Library */}
      <rect
        x="250"
        y="180"
        width="180"
        height="140"
        fill="#c9daf0"
        stroke="#7099b8"
        strokeWidth="3"
        rx="8"
      />
      <text
        x="340"
        y="240"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="16"
        fontWeight="bold"
      >
        Central Library
      </text>
      
      {/* Mechanical Engineering */}
      <rect
        x="500"
        y="180"
        width="220"
        height="140"
        fill="#c9daf0"
        stroke="#7099b8"
        strokeWidth="3"
        rx="8"
      />
      <text
        x="610"
        y="235"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="16"
        fontWeight="bold"
      >
        Mechanical
      </text>
      <text
        x="610"
        y="255"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="16"
        fontWeight="bold"
      >
        Engineering
      </text>
      
      {/* Mega Auditorium */}
      <rect
        x="500"
        y="40"
        width="220"
        height="100"
        fill="#d4a5ff"
        stroke="#9966cc"
        strokeWidth="3"
        rx="8"
      />
      <text
        x="610"
        y="85"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="16"
        fontWeight="bold"
      >
        Mega Auditorium
      </text>
      
      {/* Swimming Pool */}
      <rect
        x="620"
        y="20"
        width="140"
        height="80"
        fill="#87ceeb"
        stroke="#4a9fd8"
        strokeWidth="3"
        rx="8"
      />
      <text
        x="690"
        y="55"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="14"
        fontWeight="bold"
      >
        Swimming
      </text>
      <text
        x="690"
        y="72"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="14"
        fontWeight="bold"
      >
        Pool
      </text>
      
      {/* Playground */}
      <rect
        x="920"
        y="50"
        width="250"
        height="180"
        fill="#90ee90"
        stroke="#5cb85c"
        strokeWidth="3"
        rx="8"
      />
      <text
        x="1045"
        y="145"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="18"
        fontWeight="bold"
      >
        Playground
      </text>
      
      {/* Volleyball Court */}
      <rect
        x="1220"
        y="80"
        width="140"
        height="90"
        fill="#ffd700"
        stroke="#daa520"
        strokeWidth="2"
        rx="5"
      />
      <text
        x="1290"
        y="120"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="13"
        fontWeight="bold"
      >
        Volleyball
      </text>
      <text
        x="1290"
        y="138"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="13"
        fontWeight="bold"
      >
        Court
      </text>
      
      {/* Gandhi Park */}
      <ellipse
        cx="420"
        cy="800"
        rx="140"
        ry="100"
        fill="#7cb342"
        stroke="#558b2f"
        strokeWidth="3"
      />
      <text
        x="420"
        y="795"
        textAnchor="middle"
        fill="#fff"
        fontSize="18"
        fontWeight="bold"
      >
        Gandhi Park
      </text>
      
      {/* Student Hostel 1 */}
      <rect
        x="920"
        y="320"
        width="200"
        height="140"
        fill="#f4d4a5"
        stroke="#d4a574"
        strokeWidth="3"
        rx="8"
      />
      <text
        x="1020"
        y="380"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="15"
        fontWeight="bold"
      >
        NRI Students
      </text>
      <text
        x="1020"
        y="398"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="15"
        fontWeight="bold"
      >
        Hostel
      </text>
      
      {/* Central Mess */}
      <rect
        x="920"
        y="520"
        width="200"
        height="120"
        fill="#ff9999"
        stroke="#cc6666"
        strokeWidth="3"
        rx="8"
      />
      <text
        x="1020"
        y="575"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="16"
        fontWeight="bold"
      >
        Central Mess
      </text>
      
      {/* Student Hostel 2 (NC-10) */}
      <rect
        x="920"
        y="680"
        width="180"
        height="130"
        fill="#f4d4a5"
        stroke="#d4a574"
        strokeWidth="3"
        rx="8"
      />
      <text
        x="1010"
        y="738"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="15"
        fontWeight="bold"
      >
        Hostel NC-10
      </text>
      
      {/* Student Hostel 3 (NC-13) */}
      <rect
        x="920"
        y="850"
        width="180"
        height="130"
        fill="#f4d4a5"
        stroke="#d4a574"
        strokeWidth="3"
        rx="8"
      />
      <text
        x="1010"
        y="908"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="15"
        fontWeight="bold"
      >
        Hostel NC-13
      </text>
      
      {/* GIET Guest House */}
      <rect
        x="1300"
        y="520"
        width="180"
        height="110"
        fill="#d8b4e2"
        stroke="#b08bc4"
        strokeWidth="3"
        rx="8"
      />
      <text
        x="1390"
        y="565"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="15"
        fontWeight="bold"
      >
        GIET Guest
      </text>
      <text
        x="1390"
        y="583"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="15"
        fontWeight="bold"
      >
        House
      </text>
      
      {/* Vegetable Garden */}
      <rect
        x="1300"
        y="680"
        width="150"
        height="120"
        fill="#9acd32"
        stroke="#7cb342"
        strokeWidth="3"
        rx="8"
      />
      <text
        x="1375"
        y="730"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="14"
        fontWeight="bold"
      >
        GIET
      </text>
      <text
        x="1375"
        y="748"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="14"
        fontWeight="bold"
      >
        Vegetable
      </text>
      <text
        x="1375"
        y="766"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="14"
        fontWeight="bold"
      >
        Garden
      </text>
      
      {/* College Canteen */}
      <rect
        x="620"
        y="520"
        width="140"
        height="100"
        fill="#ffeb99"
        stroke="#ffd700"
        strokeWidth="3"
        rx="8"
      />
      <text
        x="690"
        y="560"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="14"
        fontWeight="bold"
      >
        College
      </text>
      <text
        x="690"
        y="578"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="14"
        fontWeight="bold"
      >
        Canteen
      </text>
      
      {/* Bus Stop */}
      <rect
        x="920"
        y="280"
        width="100"
        height="60"
        fill="#ffa07a"
        stroke="#ff6347"
        strokeWidth="2"
        rx="5"
      />
      <text
        x="970"
        y="315"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="13"
        fontWeight="bold"
      >
        Bus Stop
      </text>
      
      {/* Faculty Rooms */}
      <rect
        x="1160"
        y="320"
        width="160"
        height="100"
        fill="#b0d4e3"
        stroke="#7099b8"
        strokeWidth="2"
        rx="8"
      />
      <text
        x="1240"
        y="365"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="14"
        fontWeight="bold"
      >
        Faculty Rooms
      </text>
      
      {/* GIET Temple */}
      <rect
        x="190"
        y="180"
        width="50"
        height="70"
        fill="#ffdab9"
        stroke="#daa520"
        strokeWidth="3"
        rx="8"
      />
      <text
        x="215"
        y="210"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="11"
        fontWeight="bold"
      >
        GIET
      </text>
      <text
        x="215"
        y="225"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="11"
        fontWeight="bold"
      >
        Temple
      </text>
      
      {/* Staff Quarters */}
      <rect
        x="1600"
        y="280"
        width="160"
        height="110"
        fill="#e6d7c3"
        stroke="#c4a881"
        strokeWidth="2"
        rx="8"
      />
      <text
        x="1680"
        y="330"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="14"
        fontWeight="bold"
      >
        Staff Quarters
      </text>
      
      {/* Department of Basic Science */}
      <rect
        x="250"
        y="40"
        width="180"
        height="100"
        fill="#c9daf0"
        stroke="#7099b8"
        strokeWidth="3"
        rx="8"
      />
      <text
        x="340"
        y="75"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="13"
        fontWeight="bold"
      >
        Dept. of Basic
      </text>
      <text
        x="340"
        y="92"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="13"
        fontWeight="bold"
      >
        Science & Humanities
      </text>
      
      {/* Main Entrance Label */}
      <text
        x="300"
        y="420"
        textAnchor="middle"
        fill="#34495e"
        fontSize="20"
        fontWeight="bold"
      >
        ← MAIN ENTRANCE
      </text>
      
      {/* Campus Title */}
      <text
        x="1000"
        y="1150"
        textAnchor="middle"
        fill="#2c3e50"
        fontSize="32"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        GIET UNIVERSITY CAMPUS
      </text>
    </svg>
  );
};

export default CampusMap;
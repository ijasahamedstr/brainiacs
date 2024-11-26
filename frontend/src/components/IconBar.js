import React from "react";
// Importing the Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faTrophy, faGlobe, faUsers, faCircleInfo, faLocationDot } from '@fortawesome/free-solid-svg-icons';

function IconBar() {
  return (
    <section
      style={{
        backgroundColor: "#f2f3f4",
        width: "100%", // Full width
        marginBottom: "30px", // Bottom margin for spacing
        display: "flex",
        justifyContent: "center", // Horizontally center the content
        alignItems: "center", // Vertically center the content
        flexDirection: "column", // Stack items vertically
        height: "auto", // Adjust height to fit the content
        paddingTop: "40px", // More padding at the top for balance
        backgroundImage: 'url("https://your-image-url.com/image.jpg")', // Replace with your image URL
        backgroundSize: "cover", // Ensure the background covers the entire section
        backgroundPosition: "center", // Center the background image
        backgroundAttachment: "fixed", // Make the background stay fixed on scroll
      }}
    >
      {/* Grid Layout for Larger Screens */}
      <div
        style={{
          display: "grid", // Use a grid to arrange the cards
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", // Flexible cards with a minimum width of 250px
          gap: "20px", // Space between the cards
          width: "100%", // Ensure grid takes full width
          padding: "0 20px", // Adjust padding for left and right
        }}
      >
        {/* Cards */}
        {['Undergraduate', 'Postgraduate', 'Brainiacs International', 'Campus Life', 'About', 'Contact'].map((icon, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%", // Ensure all cards have the same height
              transition: "transform 0.3s ease-in-out, background-color 0.3s, color 0.3s", // Added transition for smooth hover effect
            }}
            className="icon-card"
          >
            {/* Display the Font Awesome Icon based on the card name */}
            {icon === 'Undergraduate' && (
              <FontAwesomeIcon icon={faGraduationCap} style={{ width: "50px", height: "50px", marginBottom: "10px", transition: "color 0.3s" }} />
            )}
            {icon === 'Postgraduate' && (
              <FontAwesomeIcon icon={faTrophy} style={{ width: "50px", height: "50px", marginBottom: "10px", transition: "color 0.3s" }} />
            )}
            {icon === 'Brainiacs International' && (
              <FontAwesomeIcon icon={faGlobe} style={{ width: "50px", height: "50px", marginBottom: "10px", transition: "color 0.3s" }} />
            )}
            {icon === 'Campus Life' && (
              <FontAwesomeIcon icon={faUsers} style={{ width: "50px", height: "50px", marginBottom: "10px", transition: "color 0.3s" }} />
            )}
            {icon === 'About' && (
              <FontAwesomeIcon icon={faCircleInfo} style={{ width: "50px", height: "50px", marginBottom: "10px", transition: "color 0.3s" }} />
            )}
            {icon === 'Contact' && (
              <FontAwesomeIcon icon={faLocationDot} style={{ width: "50px", height: "50px", marginBottom: "10px", transition: "color 0.3s" }} />
            )}
            <p style={{ textAlign: "center", margin: 0, fontSize: "16px", fontWeight: "bold", transition: "color 0.3s" }}>{icon}</p>
          </div>
        ))}
      </div>

      {/* Mobile Slider (for small screens) */}
      <div
        style={{
          display: "none", // Hidden by default on larger screens
          overflowX: "auto", // Enable horizontal scrolling
          whiteSpace: "nowrap", // Ensure content is displayed in a single line
          gap: "10px",
          padding: "10px 0", // Add some padding for the slider
          marginTop: "20px", // Space between the grid and the slider
        }}
        className="mobile-slider"
      >
        {['Icon 1', 'Icon 2', 'Icon 3', 'Icon 4', 'Icon 5', 'Icon 6'].map((icon, index) => (
          <div
            key={index}
            style={{
              display: "inline-block", // Cards are inline for horizontal scroll
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              minWidth: "150px", // Minimum width for each card in the slider
              margin: "0 10px",
              cursor: "pointer",
              transition: "transform 0.3s ease-in-out, background-color 0.3s",
            }}
          >
            <img
              src={`https://your-icon-url.com/icon${index + 1}.png`} // Replace with your icon URL
              alt={`Icon ${index + 1}`}
              style={{
                width: "50px",
                height: "50px",
                marginBottom: "10px",
                transition: "filter 0.3s",
              }}
            />
            <p style={{ fontWeight: "bold" }}>{icon}</p> {/* Bold font */}
          </div>
        ))}
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .mobile-slider {
              display: block; // Show the slider on mobile
            }

            .mobile-slider div {
              min-width: 180px; // Increase the minimum width for better fit on mobile
            }

            .icon-card:hover {
              transform: scale(1.1); // Slight scale effect on hover
              background-color: #007bff; // Change background color on hover
              color: #0b5097; // Change text color on hover
            }

            .icon-card:hover p {
              color: #0b5097; // Change text color when hovering
            }

            .icon-card:hover svg {
              color: #0b5097; // Change icon color on hover
            }

            .mobile-slider div:hover {
              transform: scale(1.1); // Slight scale effect on hover for mobile
              background-color: #007bff; // Change background color for mobile
              color: #0b5097; // Change text color for mobile
            }

            .mobile-slider div:hover p {
              color: #0b5097; // Change text color for mobile slider hover
            }

            p {
              font-size: 14px; // Smaller font size for mobile
            }

            /* Increase font size on mobile for better readability */
            .icon-card p {
              font-size: 14px;
            }
          }

          @media (max-width: 480px) {
            .mobile-slider div {
              min-width: 150px; // Adjust the minimum width even smaller on very small devices
            }

            .icon-card p {
              font-size: 12px; // Even smaller font size on small mobile screens
            }
          }

          /* Desktop Hover Effect */
          @media (min-width: 769px) {
            .icon-card:hover {
              transform: scale(1.05); /* Scale effect on hover */
              background-color: #007bff; /* Change background color on hover */
              color: #0b5097; /* Change text color on hover */
            }

            .icon-card:hover p {
              color: #0b5097; /* Change text color when hovering */
            }

            .icon-card:hover svg {
              color: #0b5097; /* Change icon color on hover */
            }

            .mobile-slider div:hover {
              transform: scale(1.05); /* Scale effect on hover for mobile */
              background-color: #007bff; /* Change background color for mobile */
              color: #0b5097; /* Change text color for mobile */
            }
          }
        `}
      </style>
    </section>
  );
}

export default IconBar;

import React, { useState, useRef } from "react";
import Button from "./button";
import { motion } from "motion/react";
import { Bluetooth } from "lucide-react";
// import { motion } from "motion/react";
import { AnimatePresence } from "framer-motion"; // Correct import
import axios from "axios";
import img from '../../img/profile.jpeg'

const ProfileEditor = () => {
  const  user = JSON.parse(localStorage.getItem('user'));
  const [profileData, setProfileData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    profileName: 'Mahyeldin',
    phoneNumber: user.phone,
    email: user.email,
    password: "........",
  });

  const [profilePhoto, setProfilePhoto] = useState<string>(
    img
  );
  const [isTransitioning, setIsTransitioning] = useState(false); // State to handle transition
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.result) {
          setIsTransitioning(true); // Start transition
          setTimeout(() => {
            setProfilePhoto(reader.result as string); // Update profile photo after transition
            setIsTransitioning(false); // End transition
          }, 500); // Match the duration of the Tailwind animation
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Saving profile data:", profileData);
        const headers = {
            'Accept': 'application/json',
            authorization: `Bearer ${localStorage.getItem('token')}`
        };
        const params = {
          'email':profileData.email,
          'password': profileData.password,
          'firstName':profileData.firstName,
          'lastName':profileData.lastName,
          'phone':profileData.phoneNumber
        }
        console.log(params);
        axios.put(`http://localhost:5000/api/auth/user/${user._id}`,params,{ headers })
        .then((res)=>{
            console.log(res)
            localStorage.setItem('user',JSON.stringify(res.data.user))
        }).catch((err)=>{
             console.log(err);
        })
    // Add your submit logic here
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.3}}
       
      >
        <div className="max-w-4xl mx-auto p-4">
          <div className="border-b border-gray-300 pb-4">
            <div className="flex items-center mb-6">
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0.5, scale: 0.5 }} // Start closer to full size
                  animate={{ opacity: 1, scale: 1 }} // Animate to full size
                  transition={{
                    duration: 0.000000000000000000001, // Make the animation very fast
                    scale: { type: "tween" }, // Snappier spring effect
                  }}
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "blue",
                    borderRadius: "50%",
                  }}
                  className="w-20 h-20 rounded-full overflow-hidden bg-blue-200 relative shadow-md hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={profilePhoto}
                    alt="Profile"
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                      isTransitioning ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 bg-white transform ${
                      isTransitioning ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-500`}
                  ></div>
                </motion.div>
              </div>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="ml-6 border border-gray-300 rounded-full py-2 px-6 text-sm text-gray-700 hover:bg-blue-500 hover:text-white hover:shadow-md transition-all"
              >
                Change photo
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-y-8 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={profileData.firstName}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-md transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={profileData.lastName}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-md transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    Profile name
                  </label>
                  <input
                    type="text"
                    name="profileName"
                    placeholder="Profile name"
                    value={profileData.profileName}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-md transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone number"
                    value={profileData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-md transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    email
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    value={profileData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-md transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={profileData.password}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-md transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-end">
              <Button>Save changes</Button>
            </div>
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProfileEditor;

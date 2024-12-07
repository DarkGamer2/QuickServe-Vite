import { useState} from "react";
import { useNavigate } from "react-router-dom"; 
import Modal from "./Modal";
import axios from "axios";
const RegisterForm = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [skillset, setSkillset] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");

  const navigate = useNavigate();
 
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
   await axios.post("https://quickserve-api-production.up.railway.app/api/auth/register", {
      fullName: fullName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      skillset: skillset,
    }).then((response) => {
      if (response.status === 200) {
        setModalMessage("Registration successful");
        setModalVisible(true);
      }
    }).catch((error) => {
      console.log(error);
      setModalMessage("Registration failed");
      setModalVisible(true);
   })
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <h1 className="font-bebasneue text-center text-2xl">Register</h1>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-4">
            <label className="block text-center">Full Name</label>
            <input
              className="rounded-md bg-slate-300 font-outfit w-full"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="text-center block">Email</label>
            <input
              className="rounded-md bg-slate-300 font-outfit w-full"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="text-center block">Password</label>
            <input
              className="rounded-md bg-slate-300 font-outfit w-full"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="text-center block">Confirm Password</label>
            <input
              className="rounded-md bg-slate-300 font-outfit w-full"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-center">Skillset</label>
            <input
              className="rounded-md bg-slate-300 font-outfit w-full"
              type="text"
              value={skillset.join(",")}
              onChange={(e) => setSkillset(e.target.value.split(","))}
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 text-white py-3 px-3 rounded-md">
              Register
            </button>
            <button
              type="button"
              className="bg-red-600 text-white py-3 px-3 rounded-md ml-2"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
          </div>
        </form>
      </div>
      <Modal show={modalVisible} onClose={closeModal} message={modalMessage} color="blue" type="message" />
    </div>
  );
};

export default RegisterForm;
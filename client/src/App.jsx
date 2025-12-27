import toast, {Toaster} from 'react-hot-toast'
import { Route, Routes } from "react-router-dom";

import ChatBox from "./pages/ChatBox";
import Connections from "./pages/Connections";
import CreatePost from "./pages/CreatePost";
import Discover from "./pages/Discover";
import Feed from "./pages/Feed";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Meassages from "./pages/Meassages";
import Profie from "./pages/Profie";
import{useUser} from '@clerk/clerk-react'

const App = () => {
  const {user} = useUser()
  return (
    <>
    <Toaster/>
      <Routes>
        <Route path="/" element={ !user ? <Login /> : <Layout/>}>

          <Route index element={<Feed />} />
          <Route path="messages" element={<Meassages />} />
          <Route path="messages/:userId" element={<ChatBox />} />
          <Route path="connections" element={<Connections />} />
          <Route path="discover" element={<Discover />} />
          <Route path="profile" element={<Profie />} />
          <Route path="profile/:profileId" element={<Profie />} />
          <Route path="create-post" element={<CreatePost />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
import React, { useEffect, useState } from "react";
import { useContext } from "react";

import { AuthContext } from "../context/auth.context";
import TicketModal from "./TicketModal";

// import Modal from "react-bootstrap/Modal";

import axios from "axios";
import { SERVER_URL } from "../services/SERVER_URL";

// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { library } from "@fortawesome/fontawesome-svg-core";
import DropdownWorkspace from "./DropdownWorkspace";
import DropdownUser from "./DropdownUser";
import SidebarButtons from "./SidebarButtons";
import NewTicketButton from "./NewTicketButton";
import SidebarAccordion from "./SidebarAccordion";

// library.add(fas);

const Sidebar = ({ workspaceId }) => {
  const { user, logOutUser } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [allWorkspaces, setAllWorkspaces] = useState(null);

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/workspaces`)
      .then((response) => {
        setAllWorkspaces(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {allWorkspaces && (
        <div className="sidebar">
          <nav className="nav-sidebar">
            <div>
              <div className="workspace-user">
                <DropdownWorkspace allWorkspaces={allWorkspaces} user={user} />
                <DropdownUser user={user} logOutUser={logOutUser} />
              </div>
            </div>

            <NewTicketButton
              showModal={showModal}
              setShowModal={setShowModal}
            />

            <SidebarButtons />

            <SidebarAccordion allWorkspaces={allWorkspaces}/>
          </nav>
          {showModal && <TicketModal workspaceId={workspaceId} />}
        </div>
      )}
    </>
  );
};

export default Sidebar;

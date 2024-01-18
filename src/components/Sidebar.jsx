import React, { useState } from "react";
import { useContext } from "react";

import { AuthContext } from "../context/auth.context";
import TicketModal from "./TicketModal";

import DropdownWorkspace from "./DropdownWorkspace";
import DropdownUser from "./DropdownUser";
import SidebarButtons from "./SidebarButtons";
import NewTicketButton from "./NewTicketButton";
import SidebarAccordion from "./SidebarAccordion";

const Sidebar = ({
  setFilteredTickets,
  allWorkspaces,
  setAllTickets,
  currentWorkspace,
  allTickets,
  showModal,
  setShowModal,
}) => {
  const { user, logOutUser } = useContext(AuthContext);

  return (
    <>
      {allWorkspaces && (
        <div className="sidebar">
          <nav className="nav-sidebar">
            <div>
              <div className="workspace-user">
                <DropdownWorkspace
                  currentWorkspace={currentWorkspace}
                  user={user}
                  allWorkspaces={allWorkspaces}
                />
                <DropdownUser user={user} logOutUser={logOutUser} />
              </div>
            </div>

            <NewTicketButton
              showModal={showModal}
              setShowModal={setShowModal}
            />

            <SidebarButtons />

            <SidebarAccordion currentWorkspace={currentWorkspace} />
          </nav>
          {showModal && (
            <TicketModal
              setFilteredTickets={setFilteredTickets}
              allTickets={allTickets}
              setAllTickets={setAllTickets}
              currentWorkspace={currentWorkspace}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Sidebar;

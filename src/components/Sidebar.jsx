import React, { useState } from "react";
import TicketModal from "./TicketModal";

import DropdownWorkspace from "./DropdownWorkspace";
import DropdownUser from "./DropdownUser";
import SidebarButtons from "./SidebarButtons";
import NewTicketButton from "./NewTicketButton";
import SidebarAccordion from "./SidebarAccordion";

const Sidebar = ({
  addNewTicket,
  logOutUser,
  user,
  setFilteredTickets,
  allWorkspaces,
  setAllTickets,
  currentWorkspace,
  allTickets,
  showModal,
  setShowModal,
}) => {
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
              user={user}
              addNewTicket={addNewTicket}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Sidebar;

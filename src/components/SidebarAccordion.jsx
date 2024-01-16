import React from "react";

import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

const SidebarAccordion = ({ allWorkspaces }) => {
  return (
    <div>
      <Accordion
        defaultActiveKey="0"
        className="accordion"
        style={{ marginBottom: "14px" }}
      >
        <Accordion.Item eventKey="0" className="accordion-item">
          <Accordion.Header className="accordion-header">
            Your teams
          </Accordion.Header>
          <Accordion.Body className="accordion-body">
            <Accordion defaultActiveKey="0" className="accordion">
              <Accordion.Item eventKey="0" className="accordion-item">
                <Accordion.Header className="accordion-header">
                  {allWorkspaces[0].name}
                </Accordion.Header>
                <Accordion.Body>
                  <div>
                    <Button variant="primary" className="tickets-button">
                      <i className="fas fa-ticket-alt"></i>
                      Tickets
                    </Button>

                    <Button variant="primary" className="active-button">
                      Active
                    </Button>

                    <Button variant="primary" className="backlog-button">
                      Backlog
                    </Button>
                    <Button variant="primary" className="projects-button">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        stroke="none"
                        fill="rgb(238, 239, 252)"
                        className="sc-cCjUiG jYUGQa"
                      >
                        <path d="M5.948 2H2.623A.623.623 0 0 0 2 2.623v3.325c0 .344.28.623.623.623h3.325c.344 0 .623-.279.623-.623V2.623A.623.623 0 0 0 5.948 2ZM13.377 2h-3.325a.623.623 0 0 0-.623.623v3.325c0 .344.279.623.623.623h3.325c.344 0 .623-.279.623-.623V2.623A.623.623 0 0 0 13.377 2ZM5.948 9.429H2.623a.623.623 0 0 0-.623.623v3.325c0 .344.28.623.623.623h3.325c.344 0 .623-.28.623-.623v-3.325a.623.623 0 0 0-.623-.623ZM13.377 9.429h-3.325a.623.623 0 0 0-.623.623v3.325c0 .344.279.623.623.623h3.325c.344 0 .623-.28.623-.623v-3.325a.623.623 0 0 0-.623-.623Z"></path>
                      </svg>
                      Projects
                    </Button>
                    <Button variant="primary" className="views-button">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="rgb(238, 239, 252)"
                        role="img"
                        focusable="false"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.9834 10.4186L13.7826 11.1285C13.871 11.1634 13.9411 11.2335 13.976 11.3222C14.0368 11.4767 13.9783 11.6489 13.8448 11.7363L13.7831 11.7682L8.30185 13.9399C8.13301 14.0068 7.94828 14.0178 7.77422 13.973L7.67128 13.9394L2.21638 11.768C2.12841 11.733 2.0588 11.663 2.02404 11.5747C1.96322 11.4202 2.02173 11.248 2.15522 11.1606L2.2169 11.1287L4.00718 10.4194L7.19911 11.6905C7.70434 11.8916 8.26656 11.8921 8.77211 11.6918L11.9834 10.4186ZM11.9834 6.96497L13.7826 7.67489C13.871 7.70976 13.9411 7.77991 13.976 7.86857C14.0368 8.02309 13.9783 8.1953 13.8448 8.28265L13.7831 8.3146L10.2238 9.725L9.38341 10.0574L8.30185 10.4863L8.26806 10.4966L8.19837 10.52C8.1704 10.5271 8.14216 10.5328 8.11376 10.5371C8.10431 10.5384 8.09541 10.5396 8.08651 10.5406C8.01827 10.5488 7.94872 10.5485 7.87997 10.5398L7.77422 10.5194L7.67128 10.4858L6.61816 10.066L5.75987 9.725L2.21638 8.31439C2.12841 8.27938 2.0588 8.20942 2.02404 8.12111C1.96322 7.96659 2.02173 7.79438 2.15522 7.70703L2.2169 7.67509L4.00718 6.96583L7.19911 8.23688C7.70434 8.43799 8.26656 8.43844 8.77211 8.23814L11.9834 6.96497ZM7.67257 2.06007C7.87429 1.98015 8.09871 1.97997 8.30056 2.05956L13.7826 4.22128C13.871 4.25615 13.9411 4.32629 13.976 4.41496C14.0455 4.59155 13.9591 4.79125 13.7831 4.86099L10.2238 6.27139L8.30116 7.03298L8.2318 7.057C8.21413 7.06228 8.19632 7.06698 8.17842 7.0711C8.08066 7.09377 7.97947 7.09879 7.87997 7.08616L7.77422 7.0658L7.67128 7.0322L2.21638 4.86078C2.12841 4.82577 2.0588 4.75581 2.02404 4.6675C1.95453 4.4909 2.04088 4.29121 2.2169 4.22148L7.67257 2.06007Z"
                        ></path>
                      </svg>
                      Views
                    </Button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Try</Accordion.Header>
          <Accordion.Body>
            <div>
              <Button variant="primary" className="import-tickets-button">
                <svg
                  className="sc-inWXWr hmGhva"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="rgb(238, 239, 252)"
                  role="img"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path d="M4.25 1A3.25 3.25 0 0 0 1 4.25v4.5A3.25 3.25 0 0 0 4.25 12h4.5A3.25 3.25 0 0 0 12 8.75v-4.5A3.25 3.25 0 0 0 8.75 1h-4.5ZM2.5 4.25c0-.966.784-1.75 1.75-1.75h4.5c.966 0 1.75.784 1.75 1.75v4.5a1.75 1.75 0 0 1-1.75 1.75h-4.5A1.75 1.75 0 0 1 2.5 8.75v-4.5Z"></path>
                  <path d="M5.043 14.136C4.556 13.685 4.98 13 5.645 13c.244 0 .472.105.678.235.269.168.587.265.927.265h4.5c.477 0 .91-.19 1.225-.5H13v-.025c.31-.316.5-.748.5-1.225v-4.5c0-.34-.097-.658-.265-.927-.13-.206-.235-.434-.235-.678 0-.664.684-1.09 1.136-.602.536.58.864 1.355.864 2.207v4.5A3.25 3.25 0 0 1 11.75 15h-4.5a3.238 3.238 0 0 1-2.207-.864Z"></path>
                </svg>
                Import Tickets
              </Button>

              <Button variant="primary" className="invite-people-button">
                <svg
                  className="sc-fQDqYh jULsxE"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="rgb(238, 239, 252)"
                  role="img"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path d="M8.75 3C8.75 2.58579 8.41421 2.25 8 2.25C7.58579 2.25 7.25 2.58579 7.25 3V7.25H3C2.58579 7.25 2.25 7.58579 2.25 8C2.25 8.41421 2.58579 8.75 3 8.75H7.25V13C7.25 13.4142 7.58579 13.75 8 13.75C8.41421 13.75 8.75 13.4142 8.75 13V8.75H13C13.4142 8.75 13.75 8.41421 13.75 8C13.75 7.58579 13.4142 7.25 13 7.25H8.75V3Z"></path>
                </svg>
                Invite people
              </Button>

              <Button variant="primary" className="cycles-button">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="rgb(238, 239, 252)"
                  className="sc-cTlfkw kZQOEa"
                >
                  <path d="M7.125 2.01655C7.125 1.4768 6.64899 1.05501 6.12893 1.19947C3.17141 2.02102 1 4.74235 1 7.97282C1 11.8538 4.13401 15 8 15C11.866 15 15 11.8538 15 7.97282C15 4.74235 12.8286 2.02102 9.87107 1.19947C9.35101 1.05501 8.875 1.4768 8.875 2.01655V2.01655C8.875 2.45457 9.19479 2.82058 9.61155 2.95538C11.7226 3.63819 13.25 5.62644 13.25 7.97282C13.25 10.8836 10.8995 13.2432 8 13.2432C5.10051 13.2432 2.75 10.8836 2.75 7.97282C2.75 5.62644 4.27737 3.63819 6.38845 2.95538C6.80521 2.82058 7.125 2.45457 7.125 2.01655V2.01655Z"></path>
                  <path d="M6.95588 5.28329L10.6901 7.43926C11.0235 7.63171 11.0235 8.11283 10.6901 8.30528L6.95588 10.4612C6.62255 10.6537 6.20588 10.4131 6.20588 10.0282L6.20588 5.71631C6.20588 5.33141 6.62255 5.09084 6.95588 5.28329Z"></path>
                </svg>
                Cycles
              </Button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default SidebarAccordion;

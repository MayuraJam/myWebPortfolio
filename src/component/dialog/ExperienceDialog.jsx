import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  IconButton,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  Divider,
} from "@mui/material";
import { colorTheme } from "../../style/theme";
import companyLogo from "../asset/image/Bluebik VULCAN.png";
import {
  hardSkillList,
  internProjectDetail,
  softSkillList,
} from "../data/mockData";

export const ExperinceDialog = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          borderRadius: "8px",
          overflow: "hidden",
          padding: "0",
          background: colorTheme.cream.main,
        },
      }}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle sx={{ m: 0, p: 2, textAlign: "center" }}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: colorTheme.black.main,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box
          xs={12}
          sm={6}
          sx={{
            padding: 1,
            borderRadius: "15px",
            border: "1px solid transparent",
            transition: "all 0.3s ease",
            width: "800px",
          }}
        >
          <Box
            sx={{
              border: `1px solid ${colorTheme.greenleft.main}`,
              p: 1,
              px: 1.5,
              borderRadius: "15px",
              mb: 1.5,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
              background: "#FFFDF6",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                lineHeight: "3rem",
                color: colorTheme.woodBrown.main,
                fontWeight: "bold",
                textAlign: "start",
                fontFamily: "'Share Tech', sans-serif",
              }}
            >
              Internship experience
            </Typography>
            <Box sx={{ display: "flex", mt: 2, gap: 2 }}>
              <Box
                component="img"
                src={companyLogo}
                alt={"company logo image"}
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "10px",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="h6"
                  sx={{
                    lineHeight: "1rem",
                    color: colorTheme.woodBrown.main,
                    fontWeight: "bold",
                    mb: 3,
                    textAlign: "start",
                    fontFamily: "'Share Tech', sans-serif",
                  }}
                >
                  Bluebik vulcan company limited
                </Typography>
                <Typography
                  variant="h7"
                  sx={{
                    lineHeight: "0.05rem",
                    color: "#856656",
                    textAlign: "start",
                    fontFamily: "'Share Tech', sans-serif",
                  }}
                >
                  IT consulting and solution company
                </Typography>
                <Typography
                  variant="h7"
                  sx={{
                    lineHeight: "3rem",
                    color: colorTheme.woodBrown.main,
                    textAlign: "start",
                    fontFamily: "'Share Tech', sans-serif",
                  }}
                >
                  <strong>internship 1 period :</strong> 1 May 2024 - 15 June
                  2024 |<strong>internship 2 period :</strong> 15 Nov 2024 - 15
                  April 2025
                </Typography>
              </Box>
            </Box>
            <Divider />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                mt: 3,
                gap: 2,
                overflowY: "auto",
              }}
            >
              {internProjectDetail.map((item) => (
                <Box
                  sx={{
                    backgroundColor: "#FFF1CA",
                    padding: 1,
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      minWidth: "365px",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: colorTheme.woodBrown.main,
                        fontWeight: "bold",
                        fontFamily: "'Share Tech', sans-serif",
                      }}
                    >
                      {" "}
                      {item.title}
                    </Typography>
                    <Typography
                      variant="h7"
                      sx={{
                        lineHeight: "0.05rem",
                        color: "#856656",
                        textAlign: "start",
                        fontFamily: "'Share Tech', sans-serif",
                      }}
                    >
                      {item.period}
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: colorTheme.woodBrown.main,
                      fontWeight: "bold",
                      fontFamily: "'Share Tech', sans-serif",
                      pl : 2
                    }}
                  >
                    Project : {item.projectName}
                  </Typography>
                  <ul style={{ fontSize: "10px", mb: 3 }}>
                    {item.detailList.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                  <Box
                    sx={{
                      backgroundColor: colorTheme.greenleft.main,
                      p: 1,
                      borderRadius: "5px",
                      mb: 1,
                      width: "300px",
                      ml: 3,
                    }}
                  >
                    <Typography
                      variant="h7"
                      sx={{
                        color: colorTheme.cream.main,
                        fontFamily: "'Share Tech', sans-serif",
                      }}
                    >
                      Team : {item.team}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "start",
                      gap: 3,
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: colorTheme.greenleft.main,
                        padding: 1,
                        borderRadius: "5px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        alignItems: "start",
                        width: "300px",
                        ml: 3,
                      }}
                    >
                      {item.techStack.map((tool) => (
                        <Box>
                          <Typography
                            variant="h7"
                            sx={{
                              color: colorTheme.cream.main,
                              fontFamily: "'Share Tech', sans-serif",
                            }}
                          >
                            {tool.toolType} : {"     "}
                          </Typography>

                          {tool.toolNameList.map((toolList, index) => (
                            <Typography
                              variant="p"
                              key={index}
                              sx={{
                                color: colorTheme.sakuraPink.main,
                                fontFamily: "'Share Tech', sans-serif",
                              }}
                            >
                              {toolList} ,
                            </Typography>
                          ))}
                        </Box>
                      ))}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: colorTheme.greenleft.main,
                        p: 1,
                        borderRadius: "5px",
                      }}
                    >
                      <Typography
                        variant="h7"
                        sx={{
                          color: colorTheme.cream.main,
                          fontFamily: "'Share Tech', sans-serif",
                        }}
                      >
                        Position : {item.position}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                backgroundColor: "#FFF1CA",
                padding: 1,
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
                minWidth: "300px",
                mt: 2,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: colorTheme.woodBrown.main,
                  fontWeight: "bold",
                  fontFamily: "'Share Tech', sans-serif",
                  mb:1
                }}
              >
                EXPERIENCE
              </Typography>
              <Typography
                variant="h7"
                sx={{
                  color: colorTheme.woodBrown.main,
                  fontWeight: "bold",
                  fontFamily: "'Share Tech', sans-serif",
                  mb: 2,
                  pl : 2
                }}
              >
                {" "}
                Hard skill :
              </Typography>
              <Box
                sx={{
                  backgroundColor: colorTheme.greenleft.main,
                  padding: 1,
                  borderRadius: "5px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "start",
                  width: "500px",
                  ml: 3,
                  mb: 2,
                }}
              >
                {hardSkillList.map((tool) => (
                  <Box>
                    <Typography
                      variant="p"
                      sx={{
                        color: colorTheme.cream.main,
                        fontFamily: "'Share Tech', sans-serif",
                      }}
                    >
                      {tool.toolType} : {"     "}
                    </Typography>

                    {tool.toolNameList.map((toolList, index) => (
                      <Typography
                        variant="p"
                        key={index}
                        sx={{
                          color: colorTheme.sakuraPink.main,
                          fontFamily: "'Share Tech', sans-serif",
                        }}
                      >
                        {toolList} ,
                      </Typography>
                    ))}
                  </Box>
                ))}
              </Box>
              <Typography
                variant="h7"
                sx={{
                  color: colorTheme.woodBrown.main,
                  fontWeight: "bold",
                  fontFamily: "'Share Tech', sans-serif",
                  pl : 2
                }}
              >
                {" "}
                Soft skill :
              </Typography>
              <ul style={{ fontSize: "10px", mb: 3 }}>
                {softSkillList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

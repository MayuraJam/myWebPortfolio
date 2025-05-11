import { Snackbar, Alert } from "@mui/material";
export const NotificationDialog = ({open,handleClose,massage,status}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={status}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {massage}
      </Alert>
    </Snackbar>
  );
};

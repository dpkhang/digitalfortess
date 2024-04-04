"use client";
import { Box, Button, FormControl, OutlinedInput, Typography } from "@mui/material";
import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { ModeEnum } from "@/types/app";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { LoginInput } from "@/types/login";
import { useRouter } from "@/config/navigation";

const LoginForm = () => {
  const [account, setAccount] = useState<LoginInput>({
    email: "",
    password: "",
  });

  const [disableButton, setDisableButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const t = useTranslations("LoginForm");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setDisableButton(true);
    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        email: data.get("email"),
        password: data.get("password"),
        redirect: false,
      });
      if (res?.error !== null) setError("ID or password incorrect");
      setDisableButton(false);
      setIsLoading(false);
    } catch (err) {
      setDisableButton(false);
      setIsLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccount((pre) => ({ ...pre, [name]: value }));
  };

  useEffect(() => {
    if (!account.email || !account.password) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [account]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      // transition={{ delay: 0.25 }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          px: "36px",
          width: "458px",
          height: "413px",
          display: "flex",
          flexDirection: "column",
          borderRadius: "7px",
          boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px",
        }}
      >
        <Box
          id="login-title-group"
          sx={{
            height: "90px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            fontSize="24px"
            fontWeight={500}
          >
            {t("login")}
          </Typography>
        </Box>
        <Box
          id="login-id-group"
          sx={{ width: "100%", height: "85px", mb: "16px" }}
        >
          <Typography sx={{ m: "8px 0 7px", fontSize: "14px" }}>Email</Typography>
          <FormControl
            sx={{ height: "35px" }}
            fullWidth
          >
            <OutlinedInput
              placeholder={t("enter_email")}
              name="email"
              fullWidth
              onChange={handleChange}
              sx={{
                height: "41px",
                bgcolor: "background.default",
                "& fieldset": {
                  borderColor: "color.border",
                },
              }}
              inputProps={{
                style: {
                  padding: "9px 13px",
                },
              }}
            ></OutlinedInput>
          </FormControl>
        </Box>
        <Box
          id="login-id-group"
          sx={{ width: "100%", height: "85px", mb: "16px" }}
        >
          <Typography sx={{ m: "8px 0 7px", fontSize: "14px" }}>
            {t("password")}
          </Typography>
          <FormControl
            sx={{ height: "35px" }}
            fullWidth
          >
            <OutlinedInput
              placeholder={t("enter_pass")}
              name="password"
              type="password"
              fullWidth
              onChange={handleChange}
              sx={{
                height: "41px",
                bgcolor: "background.default",
                "& fieldset": {
                  borderColor: "color.border",
                },
              }}
              inputProps={{
                style: {
                  padding: "9px 13px",
                },
              }}
            ></OutlinedInput>
          </FormControl>
        </Box>
        <Box sx={{ height: "15px" }}>
          <Typography sx={{ color: "error.main", fontSize: "15px", height: "100%" }}>
            {error}
          </Typography>
        </Box>
        <Button
          disabled={disableButton}
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            px: "120px",
            my: "30px",
            pt: "10px",
            height: "35px",
            boxShadow: 0,
            transition: "transform .25s",
            display: "flex",
            alignItems: "center",
            ":hover": {
              bgcolor: "primary.main",
              transform: "scale(1.01)",
              boxShadow: 0,
            },
          }}
        >
          {isLoading ? "Loading" : "Login"}
        </Button>
      </Box>
    </motion.div>
  );
};

export default LoginForm;

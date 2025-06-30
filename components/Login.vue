<script setup lang="ts">
import {GoogleSignInButton, type CredentialResponse,} from "vue3-google-signin";

const { loggedIn, session, user, clear, fetch } = useUserSession()

// handle success event
const handleLoginSuccess = (response: CredentialResponse) => {
  const { credential } = response;
  if(credential){
    
    user = await $fetch("/api/google-login", {
        method: "POST",
        body: {
            token: credential
        }
    })
    console.log(user.value)
  }
};

// handle an error event
const handleLoginError = () => {
  console.error("Login failed");
};
</script>

<template>
  <GoogleSignInButton
    @success="handleLoginSuccess"
    @error="handleLoginError"
  ></GoogleSignInButton>
</template>

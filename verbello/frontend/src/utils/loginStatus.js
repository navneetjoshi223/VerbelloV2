
    export const loginStatus = async () => {
        let response;
        try {
          // Make a request to your server to check if the user is logged in
          response = await fetch(
            "http://localhost:2000/api/users/checkSession",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
            }
          );
         
          if (response.ok) {
            const data = await response.json();
            console.log(data,'Data')
            return data
          }
        } catch (error) {
          console.error("Error checking login status:", error);
        }
      };

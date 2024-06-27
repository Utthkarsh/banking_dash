import React from "react";
import HeaderBox from "@/components/ui/HeaderBox";
import { TotalBalanceBox } from "@/components/ui/TotalBalanceBox";
import RightSideBar from "@/components/ui/RightSideBar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
const Home = async () =>{
    const loggedIn = await getLoggedInUser()
    // const loggedIn = {firstName: "Utthkarsh",lastName:"Kottali",email:"utkistudy@gmail.com"}
    return (
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={loggedIn?.name || "Guest"}
              subtext="access and manage your account"
            />
            <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={125.24}
            />
          </header>
         
        </div>
        <RightSideBar 
          user={loggedIn}
          transactions={[]}
          banks={[{currentBalance:123.4},{currentBalance:400.1}]}
        />

      </section>
    );
}

export default Home;
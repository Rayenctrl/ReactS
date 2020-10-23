import React, { Component } from 'react'

export default class Profil extends Component {
    profil={fullName:"Lazghab Rayen",bio:"23 old boy resident in Tunisia",profession:"Student",imgSrc:"https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-homme-photo-de-profil-avatar-avatar-de-l-utilisateur-par-d%C3%A9faut-invit%C3%A9-avatar-simplement-la-t%C3%AAte-humain.jpg"}
    
    // Profil(() => {
    //     const [seconds, setSeconds] = useState(0);
    //     const interval = setInterval(() => {
    //       setSeconds(seconds => seconds + 1);
    //     }, 1000);
    //     return () => clearInterval(interval);
    //   }, []);

    render() {
        const{fullName,bio,profession,imgSrc}=this.profil
        return (
            <div>
             <h2>{fullName}</h2>
             <h3>{bio}</h3>
             <h3>{profession}</h3>
             <img src={imgSrc} alt=""></img> 
            </div>
        )
    }
}

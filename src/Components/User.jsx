

const User = ({ userID }) => {
  let userName;
  switch (userID) {
    case 1:
      userName = "Alexander";
      break;
    case 2:
      userName = "Benjamin";
      break;
    case 4:
      userName = "Daniel";
      break;
    case 5:
      userName = "Ethan";
      break;
    case 6:
      userName = "Finn";
      break;
    case 7:
        userName = "Gabriel";
        break;
    case 8:
        userName = "Henry";
        break;
    case 9:
        userName = "Issac";
        break;
    case 10:
        userName = "Jack";
        break;
    case 11:
        userName = "Liam";
        break;
    case 14:
        userName = "Oliver";
        break;
    case 15:
        userName = "Patrick";
        break;
    case 17:
        userName = "Ryan";
        break;
    case 18:
        userName = "Samuel";
        break;
    case 19:
        userName = "Thomas";
        break;
    case 20:
        userName = "William";
        break;
    default:
        userName = "Unknown Seller"
        break;
  }

  return <p className="seller-name">Seller : {userName}</p>;
};

export default User;

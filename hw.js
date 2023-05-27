document.querySelector('button') = showComment();

function showComment() {

    let userName = document.querySelector('.username').value;
    let userNameCorrect = userName.substr(0, 1).toUpperCase() + userName.substr(1).toLowerCase();
    let userNameAnswer = document.querySelector('.out');
    userNameAnswer.textContent = userNameCorrect;
    
    
    let avatar = document.querySelector('.avatar').value;
    let avatarAnswer = document.querySelector('.outavatar');
    avatarAnswer.setAttribute("src", avatar);
    avatarAnswer.textContent = avatar;

    let comment = document.querySelector('.comment').value;
    comment.indexOf('viagra');
    let commentCorrect = comment.replace(/viagra/i, "***");
    
    let commentAnswer = document.querySelector('.commentanswer');
    commentAnswer.textContent = commentCorrect;
}
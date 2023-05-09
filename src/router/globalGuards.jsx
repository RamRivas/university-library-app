const globalGuards = [
    (to, from, next) => { //RequireLogin
        if (to.meta.auth && !localStorage.getItem('refresh_token')) {
          next.navigate('/login');
        }
        next();
    }
];

export default globalGuards;


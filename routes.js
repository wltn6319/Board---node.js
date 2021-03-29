// homoe
const HOME ="/"


//board
const BOARD = "/board";
const LIST = "/list";
const BOARDCREATE = "/boardCreate";
const BOARDDETAIL = "/boardDetail/:id";
const BOARDUPDATE = "/boardUpdate/:id";
const BOARDDELETE = "/boardDelete/:id";


const routes = {
    home : HOME,
    board: BOARD,
    list: LIST,
    boardCreate: BOARDCREATE,
    boardDetail : BOARDDETAIL,
    boardUpdate : BOARDUPDATE,
    boardDelete : BOARDDELETE,
};

export default routes;
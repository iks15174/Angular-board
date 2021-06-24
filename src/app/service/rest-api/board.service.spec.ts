import { TestBed } from '@angular/core/testing';
import { User } from 'src/app/model/myinfo/User';
import { BoardService } from './board.service';


class MockUserListService {
    public userList: User[];

    constructor() {
        this.userList = [];
        this.userList.push({ id: "test", name: "test", password: "1234" });
    }

    findUser(user: User): boolean {
        for (let i = 0; i < this.userList.length; i++) {
            if (this.userList[i].id === user.id) {
                return true;
            }
        }
        return false;
    }

    addUser() { }

    addRandomUser() { };
}

describe('BoardService', () => {
    let userlistService: MockUserListService;
    let boardService: BoardService;

    beforeEach((() => {
        TestBed.configureTestingModule({});
        userlistService = new MockUserListService();
        boardService = new BoardService(userlistService as any);
    }));

    afterEach(() => {
        localStorage.removeItem('userList');
        localStorage.removeItem('postList');
    })

    it("BoardService should have one post in postList", () => {
        expect(boardService.postList.length).toEqual(1);
    })

    it("BoardService should add post when user logined", () => {
        let testUser: User = { id: "test", name: "test", password: "1234" };
        expect(boardService.addPost("test", "test", testUser)).toBeTruthy();
        testUser = { id: "test1", name: "test", password: "1234" };
        expect(boardService.addPost("test", "test", testUser)).toBeFalsy();
    })

    it("BoardService post should be modifyed by owner", () => {
        let testUser: User = { id: "admin@naver.com", name: "jiho", password: "1234"};
        expect(boardService.modifyPost(1, "test", "test", testUser)).toBeTruthy();
        testUser = {id: "test", name: "test", password: "1234"};
        expect(boardService.modifyPost(1, "test", "test", testUser)).toBeFalsy();
    })

    it("BoardService post should be deleted by owner", () => {
        let testUser: User = {id: "test", name: "test", password: "1234"};
        expect(boardService.deletePost(1, testUser)).toBeFalsy();
        testUser = { id: "admin@naver.com", name: "jiho", password: "1234"};
        expect(boardService.deletePost(1, testUser)).toBeTruthy();
    })

    it("BoardService should delete post that exist", () => {
        let testUser: User = {id: "admin@naver.com", name: "jiho", password: "1234"};
        expect(boardService.deletePost(2, testUser)).toBeFalsy();
        expect(boardService.deletePost(1, testUser)).toBeTruthy();
    })
});

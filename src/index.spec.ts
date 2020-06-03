import { BowlingScore } from "."

describe('bowling', () => {
    let bowling: BowlingScore;
    beforeEach(() => {
        bowling = new BowlingScore();
    })

    it('should calulate empty game with 0', () => {
        // when
        for (let i = 0; i < 20; i++) {
            bowling.roll(0);
        }

        // then
        expect(bowling.score()).toBe(0);
    });

    it('should end game with 20 points', () => {
        // when 
        for (let i = 0; i < 20; i++) {
            bowling.roll(1);
        }

        // then
        expect(bowling.score()).toBe(20);
    });

    it('should return 12 with one strike and one point', () => {
        // when
        bowling.roll(10);
        bowling.roll(1);
        bowling.roll(1);

        for (let i = 0; i < 18; i++) {
            bowling.roll(0);
        }

        // then
        expect(bowling.score()).toBe(14);
    });

    it('should return 13 with one spare and one point', ()=>{
        // when
        bowling.roll(5);
        bowling.roll(5);
        bowling.roll(1);
        bowling.roll(1);

        for (let i = 0; i < 16; i++) {
            bowling.roll(0);
        }

        // then
        expect(bowling.score()).toBe(13);
    });

    it('should return 40 with 2 strikes one after the other', ()=>{
         // when
         bowling.roll(10);
         bowling.roll(10);
         bowling.roll(5);
 
         for (let i = 0; i < 15; i++) {
             bowling.roll(0);
         }
 
         // then
         expect(bowling.score()).toBe(45);
    });

    it('should return 300 for perfect game', ()=>{
         // when
        for (let i = 0; i < 12; i++) {
            bowling.roll(10);
        }

           // then
           expect(bowling.score()).toBe(300);
    })
})
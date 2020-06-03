export class BowlingScore {
    private rolls: number[] = [];
    private currentScore = 0;

    roll(roll: number) {
        this.rolls.push(roll);
    }

    private strikeBonus(index: number) {
        return this.rolls[index + 1] + this.rolls[index + 2];
    }

    private isStrike(index: number) {
        return this.rolls[index] === 10;
    }

    private isSpare(index: number) {
        return this.rolls[index] + this.rolls[index + 1] === 10;
    }

    private spareBonus(index: number) {
        return this.rolls[index + 2];
    }

    score(): number {
        let score = 0;
        let rollIndex = 0;

        for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
            if (this.isStrike(rollIndex)) {
                score += 10 + this.strikeBonus(rollIndex);
                rollIndex++;
            } else if (this.isSpare(rollIndex)) {
                score += 10 + this.spareBonus(rollIndex);
                rollIndex += 2;
            } else {
                score += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
                rollIndex += 2;
            }
        }

        return score;
    }
}
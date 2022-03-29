export function tournamentWinner(competitions: string[][], results: number[]) {
    // Write your code here.
    const map: any = {};
    const homeTeamWin = 0;
    let potencialWinner: string | null = null;

    for (let i = 0; i < competitions.length; i++) {
        let winTeam = results[i] === homeTeamWin ? competitions[i][1] : competitions[i][0];
        map[winTeam] = map[winTeam] != null ? map[winTeam] + 3 : 3;

        if (potencialWinner == null || map[potencialWinner] < map[winTeam]) {
            potencialWinner = winTeam;
        }
    }

    return potencialWinner;
}

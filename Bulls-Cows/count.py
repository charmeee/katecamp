def count_bulls_cows(player_num, answer):
    bulls = 0
    cows = 0
    for i in range(len(player_num)):
        if player_num[i] == answer[i]:
            bulls += 1
        elif player_num[i] in answer:
            cows += 1
    return bulls, cows


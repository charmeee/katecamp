from count import * 
from GenNums import * 
from input_number import * 


logo = """ 
                                       _             _  _      
                               ___    | |           | || |     
  ___   ___  __      __ ___   ( _ )   | |__   _   _ | || | ___ 
 / __| / _ \ \ \ /\ / // __|  / _ \/\ | '_ \ | | | || || |/ __|
| (__ | (_) | \ V  V / \__ \ | (_>  < | |_) || |_| || || |\__\ 
 \___| \___/   \_/\_/  |___/  \___/\/ |_.__/  \__,_||_||_||___/
                            
"""

print(logo)

answer = genNums()
answer = "".join(answer)

while True:
    player_num = input_num()
    bulls,cows = count_bulls_cows(player_num, answer)

    print('bulls :' , bulls)
    print('cows :' , cows)
    if bulls == 4: 
        print('정답입니다!')
        break
    print('--------------------')




    





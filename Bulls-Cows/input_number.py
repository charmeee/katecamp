
def input_num():
    while True:
        user_input = input("Input 4 digits.\n")
        if user_input.isdigit() and len(set(user_input)) == 4:
            break

    return user_input

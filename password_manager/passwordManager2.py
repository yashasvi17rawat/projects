from tkinter import *

window=Tk()
window.title("password vault")

def first_screen():
    window.geometry("250x150")

    l3=Label(window,text="Enter the master password: ")
    l3.config(anchor=CENTER)
    l3.pack()

    txt2=Entry(window,width=20)
    txt2.pack()
    txt2.focus()

    l4=Label(window,text="Re enter the password: ")
    l4.pack()

    txt3=Entry(window,width=20)
    txt3.pack()
    txt3.focus()

    l4=Label(window)
    l4.pack()


    def save_password():
        if txt2.get()==txt3.get():
            pass
        else:
            l4.config(text="passwords do not match")
             

    b2=Button(window,text="Save Password",command=save_password)
    b2.pack()





def login_screen():
    window.geometry("250x100")

    l1=Label(window,text="Enter the master password: ")
    l1.config(anchor=CENTER)
    l1.pack()

    txt=Entry(window, width=20, show="*")
    txt.pack()
    txt.focus()

    def check_password():
        password="text"

        if password==txt.get():
            l1.config(text="welcome")
            password_vault()
        else :
            txt.delete(0,'end')
            l1.config(text="wrong password")

    b1=Button(window,text="Submit",command=check_password)
    b1.pack()


def password_vault():
    for widget in window.winfo_children():
        widget.destroy()
    window.geometry("700x350")

    l2=Label(window, text="Password Vault")
    l2.config(anchor=CENTER)
    l2.pack()

login_screen()
window.mainloop()
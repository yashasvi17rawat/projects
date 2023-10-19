from tkinter import*

parent_window2=Tk()#create base window 2

l0=Label(parent_window2,text="PASSWORD MANAGER")
l1=Label(parent_window2,text="Enter your choice")
l2=Label(parent_window2,text="1.Add new password \n2.view existing passwords \n3.exit")
e1=Entry(parent_window2)

l0.grid(row=1,column=1)
l1.grid(row=2,column=1)
l2.grid(row=3,column=1)
e1.grid(row=4,column=1)
def menu():
   
    ch=int(e1.get())
    if(ch==1):
        parent_window=Tk()#create base window
        label1=Label(parent_window,text="Enter the details of the new passwords:")
        label2=Label(parent_window,text="Enter the name of the software: ")
        en1=Entry(parent_window)
        label3=Label(parent_window,text="Enter the user id  of the software: ")
        en2=Entry(parent_window)
        label4=Label(parent_window,text="Enter the password of the software: ")
        en3=Entry(parent_window)

        label1.grid(row=1,column=1)
        label2.grid(row=2,column=1)
        en1.grid(row=3,column=1)
        label3.grid(row=4,column=1)
        en2.grid(row=5,column=1)
        label4.grid(row=6,column=1)
        en3.grid(row=7,column=1)

        def submit():
            name=(en1.get())
            id=(en2.get())
            password=(en3.get())
            file=open("pass.txt","a")
            file.write(encrpt(name) +" "+ encrpt(id)+ " " + encrpt(password) + "\n")
            file.close() 

        but1=Button(parent_window,text="SUBMIT",command=submit)
        but1.grid(row=8,column=1)

    elif(ch==2):
       
        parent_window3=Tk()#create base window
        ll1=Label(parent_window3,text="software_name\t\t\tuser_id\t\t\tpassword")
        ll1.grid(row=1,column=1)
        # ee1=Entry(parent_window3)
        # ee1.place(x=0,y=30)
        # ee2=Entry(parent_window3)
        # ee2.place(x=150,y=30)
        # ee3=Entry(parent_window3)
        # ee3.place(x=300,y=30)
        # text = Tk.Text(parent_window3)
        # scroll = Tk.Scrollbar(parent_window3)
        # text.configure(yscrollcommand=scroll.set)
        # text.pack(side=Tk.LEFT)
        
        
        # scroll.config(command=text.yview)
        # scroll.pack(side=Tk.RIGHT, fill=Tk.Y)
        file=open("pass.txt","r")
        k=2
        for i in file:
            data=i.split(" ")

            ll2=Label(parent_window3)
            ll2.grid(row=k,column=1)
            k=k+1
           
            # ee1.insert(0,decrpt(data[0]))
            # ee2.insert(0,decrpt(data[1]))
            # ee3.insert(0,decrpt(data[2]))
            # insert=decrpt(data[0]) + "\t\t" + decrpt(data[1]) + "\t\t" + decrpt(data[2]+"\n")
            # text.insert(Tk.END, insert)
            ll2.config(text=decrpt(data[0]) + "\t\t\t\t" + decrpt(data[1]) + "\t\t\t\t" + decrpt(data[2])+"\n")

    elif(ch==3):
        return
           

b1=Button(parent_window2,text="Enter",command=menu)
b1.grid(row=5,column=1)


def encrpt(data):
    encrypted=""
    
    for i in range(len(data)):
        
        char=data[i]
        if char.isalpha():
            encrypted+=chr(ord(char)+1)
        elif char.isdigit():
            encrypted+=chr(ord(char)+1)
        else : 
            encrypted+=char
    return encrypted
        
def decrpt(data):
    decrypted=""
    
    for i in range(len(data)):
        
        char=data[i]
        if char.isalpha():
            decrypted+=chr(ord(char)-1)
        elif char.isdigit():
            decrypted+=chr(ord(char)-1)
        else : 
            decrypted+=char
    return decrypted
         

mainloop()


   

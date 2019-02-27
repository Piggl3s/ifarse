Dim iURL 
Dim objShell
iURL = "https://ipark.iress.co.uk/"
set objShell = CreateObject("Shell.Application")
objShell.ShellExecute "chrome.exe", iURL, "", "", 1
Set ObjShell = CreateObject("Wscript.Shell")
Set WshShell = WScript.CreateObject("WScript.Shell")
wscript.sleep 15000 
ObjShell.AppActivate("chrome")
WshShell.SendKeys "{ENTER}"

# Get Operating System Info
$sServer = "<server IP>"
$sOS =Get-WmiObject -class Win32_OperatingSystem -computername $sServer

foreach($sProperty in $sOS)
{
   write-host $sProperty.Description
   write-host $sProperty.Caption
   write-host $sProperty.OSArchitecture
   write-host $sProperty.ServicePackMajorVersion
   
   
   
   
}
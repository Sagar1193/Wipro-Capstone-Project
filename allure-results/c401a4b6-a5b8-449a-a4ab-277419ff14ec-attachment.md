# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim\pim.spec.js >> PIM Module Tests >> Search Employee By ID
- Location: tests\pim\pim.spec.js:199:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('.oxd-form-row .oxd-input').nth(1) to be visible

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Admin" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "PIM" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: 029340238940234234 ô kìa
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - listitem [ref=e132] [cursor=pointer]:
            - generic [ref=e133]:
              - text: Configuration
              - generic [ref=e134]: 
          - listitem [ref=e135] [cursor=pointer]:
            - link "Employee List" [ref=e136]:
              - /url: "#"
          - listitem [ref=e137] [cursor=pointer]:
            - link "Add Employee" [ref=e138]:
              - /url: "#"
          - listitem [ref=e139] [cursor=pointer]:
            - link "Reports" [ref=e140]:
              - /url: "#"
          - button "" [ref=e142] [cursor=pointer]:
            - generic [ref=e143]: 
  - generic [ref=e144]:
    - generic [ref=e146]:
      - generic [ref=e147]:
        - generic [ref=e148]:
          - heading "Employee Information" [level=5] [ref=e150]
          - button "" [ref=e153] [cursor=pointer]:
            - generic [ref=e154]: 
        - separator [ref=e155]
        - generic [ref=e157]:
          - generic [ref=e159]:
            - generic [ref=e161]:
              - generic [ref=e163]: Employee Name
              - textbox "Type for hints..." [ref=e167]
            - generic [ref=e169]:
              - generic [ref=e171]: Employee Id
              - textbox [ref=e173]
            - generic [ref=e175]:
              - generic [ref=e177]: Employment Status
              - generic [ref=e180] [cursor=pointer]:
                - generic [ref=e181]: "-- Select --"
                - generic [ref=e183]: 
            - generic [ref=e185]:
              - generic [ref=e187]: Include
              - generic [ref=e190] [cursor=pointer]:
                - generic [ref=e191]: Current Employees Only
                - generic [ref=e193]: 
            - generic [ref=e195]:
              - generic [ref=e197]: Supervisor Name
              - textbox "Type for hints..." [ref=e201]
            - generic [ref=e203]:
              - generic [ref=e205]: Job Title
              - generic [ref=e208] [cursor=pointer]:
                - generic [ref=e209]: "-- Select --"
                - generic [ref=e211]: 
            - generic [ref=e213]:
              - generic [ref=e215]: Sub Unit
              - generic [ref=e218] [cursor=pointer]:
                - generic [ref=e219]: "-- Select --"
                - generic [ref=e221]: 
          - separator [ref=e222]
          - generic [ref=e223]:
            - button "Reset" [ref=e224] [cursor=pointer]
            - button "Search" [ref=e225] [cursor=pointer]
      - generic [ref=e226]:
        - button " Add" [ref=e228] [cursor=pointer]:
          - generic [ref=e229]: 
          - text: Add
        - generic [ref=e230]:
          - separator [ref=e231]
          - generic [ref=e233]: (226) Records Found
        - table [ref=e235]:
          - rowgroup [ref=e236]:
            - row " Id  First (& Middle) Name  Last Name  Job Title  Employment Status  Sub Unit  Supervisor  Actions" [ref=e237]:
              - columnheader "" [ref=e238]:
                - generic [ref=e240] [cursor=pointer]:
                  - checkbox "" [ref=e241]
                  - generic [ref=e243]: 
              - columnheader "Id " [ref=e244]:
                - text: Id
                - generic [ref=e245]:
                  - generic [ref=e246] [cursor=pointer]: 
                  - text:  
              - columnheader "First (& Middle) Name " [ref=e247]:
                - text: First (& Middle) Name
                - generic [ref=e248]:
                  - generic [ref=e249] [cursor=pointer]: 
                  - text:  
              - columnheader "Last Name " [ref=e250]:
                - text: Last Name
                - generic [ref=e251]:
                  - generic [ref=e252] [cursor=pointer]: 
                  - text:  
              - columnheader "Job Title " [ref=e253]:
                - text: Job Title
                - generic [ref=e254]:
                  - generic [ref=e255] [cursor=pointer]: 
                  - text:  
              - columnheader "Employment Status " [ref=e256]:
                - text: Employment Status
                - generic [ref=e257]:
                  - generic [ref=e258] [cursor=pointer]: 
                  - text:  
              - columnheader "Sub Unit " [ref=e259]:
                - text: Sub Unit
                - generic [ref=e260]:
                  - generic [ref=e261] [cursor=pointer]: 
                  - text:  
              - columnheader "Supervisor " [ref=e262]:
                - text: Supervisor
                - generic [ref=e263]:
                  - generic [ref=e264] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=e265]
          - rowgroup [ref=e266]:
            - row " $^$SC 029340238940234234 ô kìa HR Manager Full-Time Permanent Human Resources " [ref=e268] [cursor=pointer]:
              - cell "" [ref=e269]:
                - generic [ref=e273]:
                  - checkbox "" [ref=e274]
                  - generic [ref=e276]: 
              - cell "$^$SC" [ref=e277]:
                - generic [ref=e278]: $^$SC
              - cell "029340238940234234" [ref=e279]:
                - generic [ref=e280]: "029340238940234234"
              - cell "ô kìa" [ref=e281]:
                - generic [ref=e282]: ô kìa
              - cell "HR Manager" [ref=e283]:
                - generic [ref=e284]: HR Manager
              - cell "Full-Time Permanent" [ref=e285]:
                - generic [ref=e286]: Full-Time Permanent
              - cell "Human Resources" [ref=e287]:
                - generic [ref=e288]: Human Resources
              - cell [ref=e289]
              - cell "" [ref=e290]:
                - button "" [ref=e292]:
                  - generic [ref=e293]: 
            - row " 0295 99N75 425 5TlV  " [ref=e295] [cursor=pointer]:
              - cell "" [ref=e296]:
                - generic [ref=e299]:
                  - checkbox "" [ref=e300]
                  - generic [ref=e302]: 
              - cell "0295" [ref=e303]:
                - generic [ref=e304]: "0295"
              - cell "99N75 425" [ref=e305]:
                - generic [ref=e306]: 99N75 425
              - cell "5TlV" [ref=e307]:
                - generic [ref=e308]: 5TlV
              - cell [ref=e309]
              - cell [ref=e310]
              - cell [ref=e311]
              - cell [ref=e312]
              - cell " " [ref=e313]:
                - generic [ref=e314]:
                  - button "" [ref=e315]:
                    - generic [ref=e316]: 
                  - button "" [ref=e317]:
                    - generic [ref=e318]: 
            - row " 0464 @#$$& *&^^ !@#$%%  " [ref=e320] [cursor=pointer]:
              - cell "" [ref=e321]:
                - generic [ref=e324]:
                  - checkbox "" [ref=e325]
                  - generic [ref=e327]: 
              - cell "0464" [ref=e328]:
                - generic [ref=e329]: "0464"
              - cell "@#$$& *&^^" [ref=e330]:
                - generic [ref=e331]: "@#$$& *&^^"
              - cell "!@#$%%" [ref=e332]:
                - generic [ref=e333]: "!@#$%%"
              - cell [ref=e334]
              - cell [ref=e335]
              - cell [ref=e336]
              - cell [ref=e337]
              - cell " " [ref=e338]:
                - generic [ref=e339]:
                  - button "" [ref=e340]:
                    - generic [ref=e341]: 
                  - button "" [ref=e342]:
                    - generic [ref=e343]: 
            - row " 0374 @@@@ $$$$$  " [ref=e345] [cursor=pointer]:
              - cell "" [ref=e346]:
                - generic [ref=e349]:
                  - checkbox "" [ref=e350]
                  - generic [ref=e352]: 
              - cell "0374" [ref=e353]:
                - generic [ref=e354]: "0374"
              - cell "@@@@" [ref=e355]:
                - generic [ref=e356]: "@@@@"
              - cell "$$$$$" [ref=e357]:
                - generic [ref=e358]: $$$$$
              - cell [ref=e359]
              - cell [ref=e360]
              - cell [ref=e361]
              - cell [ref=e362]
              - cell " " [ref=e363]:
                - generic [ref=e364]:
                  - button "" [ref=e365]:
                    - generic [ref=e366]: 
                  - button "" [ref=e367]:
                    - generic [ref=e368]: 
            - row " 03821 @@@@@ $$$$$  " [ref=e370] [cursor=pointer]:
              - cell "" [ref=e371]:
                - generic [ref=e374]:
                  - checkbox "" [ref=e375]
                  - generic [ref=e377]: 
              - cell "03821" [ref=e378]:
                - generic [ref=e379]: "03821"
              - cell "@@@@@" [ref=e380]:
                - generic [ref=e381]: "@@@@@"
              - cell "$$$$$" [ref=e382]:
                - generic [ref=e383]: $$$$$
              - cell [ref=e384]
              - cell [ref=e385]
              - cell [ref=e386]
              - cell [ref=e387]
              - cell " " [ref=e388]:
                - generic [ref=e389]:
                  - button "" [ref=e390]:
                    - generic [ref=e391]: 
                  - button "" [ref=e392]:
                    - generic [ref=e393]: 
            - row " 0312 A8DCo 4Ys 010Z  " [ref=e395] [cursor=pointer]:
              - cell "" [ref=e396]:
                - generic [ref=e399]:
                  - checkbox "" [ref=e400]
                  - generic [ref=e402]: 
              - cell "0312" [ref=e403]:
                - generic [ref=e404]: "0312"
              - cell "A8DCo 4Ys" [ref=e405]:
                - generic [ref=e406]: A8DCo 4Ys
              - cell "010Z" [ref=e407]:
                - generic [ref=e408]: 010Z
              - cell [ref=e409]
              - cell [ref=e410]
              - cell [ref=e411]
              - cell [ref=e412]
              - cell " " [ref=e413]:
                - generic [ref=e414]:
                  - button "" [ref=e415]:
                    - generic [ref=e416]: 
                  - button "" [ref=e417]:
                    - generic [ref=e418]: 
            - row " 01715 Amelia Brown  " [ref=e420] [cursor=pointer]:
              - cell "" [ref=e421]:
                - generic [ref=e424]:
                  - checkbox "" [ref=e425]
                  - generic [ref=e427]: 
              - cell "01715" [ref=e428]:
                - generic [ref=e429]: "01715"
              - cell "Amelia" [ref=e430]:
                - generic [ref=e431]: Amelia
              - cell "Brown" [ref=e432]:
                - generic [ref=e433]: Brown
              - cell [ref=e434]
              - cell [ref=e435]
              - cell [ref=e436]
              - cell [ref=e437]
              - cell " " [ref=e438]:
                - generic [ref=e439]:
                  - button "" [ref=e440]:
                    - generic [ref=e441]: 
                  - button "" [ref=e442]:
                    - generic [ref=e443]: 
            - row " 345 aniket Ashok patil  " [ref=e445] [cursor=pointer]:
              - cell "" [ref=e446]:
                - generic [ref=e449]:
                  - checkbox "" [ref=e450]
                  - generic [ref=e452]: 
              - cell "345" [ref=e453]:
                - generic [ref=e454]: "345"
              - cell "aniket Ashok" [ref=e455]:
                - generic [ref=e456]: aniket Ashok
              - cell "patil" [ref=e457]:
                - generic [ref=e458]: patil
              - cell [ref=e459]
              - cell [ref=e460]
              - cell [ref=e461]
              - cell [ref=e462]
              - cell " " [ref=e463]:
                - generic [ref=e464]:
                  - button "" [ref=e465]:
                    - generic [ref=e466]: 
                  - button "" [ref=e467]:
                    - generic [ref=e468]: 
            - row " 0360 aniket t t  " [ref=e470] [cursor=pointer]:
              - cell "" [ref=e471]:
                - generic [ref=e474]:
                  - checkbox "" [ref=e475]
                  - generic [ref=e477]: 
              - cell "0360" [ref=e478]:
                - generic [ref=e479]: "0360"
              - cell "aniket t" [ref=e480]:
                - generic [ref=e481]: aniket t
              - cell "t" [ref=e482]:
                - generic [ref=e483]: t
              - cell [ref=e484]
              - cell [ref=e485]
              - cell [ref=e486]
              - cell [ref=e487]
              - cell " " [ref=e488]:
                - generic [ref=e489]:
                  - button "" [ref=e490]:
                    - generic [ref=e491]: 
                  - button "" [ref=e492]:
                    - generic [ref=e493]: 
            - row " 0367 Ash J Tyson  " [ref=e495] [cursor=pointer]:
              - cell "" [ref=e496]:
                - generic [ref=e499]:
                  - checkbox "" [ref=e500]
                  - generic [ref=e502]: 
              - cell "0367" [ref=e503]:
                - generic [ref=e504]: "0367"
              - cell "Ash J" [ref=e505]:
                - generic [ref=e506]: Ash J
              - cell "Tyson" [ref=e507]:
                - generic [ref=e508]: Tyson
              - cell [ref=e509]
              - cell [ref=e510]
              - cell [ref=e511]
              - cell [ref=e512]
              - cell " " [ref=e513]:
                - generic [ref=e514]:
                  - button "" [ref=e515]:
                    - generic [ref=e516]: 
                  - button "" [ref=e517]:
                    - generic [ref=e518]: 
            - row " 9748495 Auto PIM User  " [ref=e520] [cursor=pointer]:
              - cell "" [ref=e521]:
                - generic [ref=e524]:
                  - checkbox "" [ref=e525]
                  - generic [ref=e527]: 
              - cell "9748495" [ref=e528]:
                - generic [ref=e529]: "9748495"
              - cell "Auto PIM" [ref=e530]:
                - generic [ref=e531]: Auto PIM
              - cell "User" [ref=e532]:
                - generic [ref=e533]: User
              - cell [ref=e534]
              - cell [ref=e535]
              - cell [ref=e536]
              - cell [ref=e537]
              - cell " " [ref=e538]:
                - generic [ref=e539]:
                  - button "" [ref=e540]:
                    - generic [ref=e541]: 
                  - button "" [ref=e542]:
                    - generic [ref=e543]: 
            - row " 9475833 Auto PIM User  " [ref=e545] [cursor=pointer]:
              - cell "" [ref=e546]:
                - generic [ref=e549]:
                  - checkbox "" [ref=e550]
                  - generic [ref=e552]: 
              - cell "9475833" [ref=e553]:
                - generic [ref=e554]: "9475833"
              - cell "Auto PIM" [ref=e555]:
                - generic [ref=e556]: Auto PIM
              - cell "User" [ref=e557]:
                - generic [ref=e558]: User
              - cell [ref=e559]
              - cell [ref=e560]
              - cell [ref=e561]
              - cell [ref=e562]
              - cell " " [ref=e563]:
                - generic [ref=e564]:
                  - button "" [ref=e565]:
                    - generic [ref=e566]: 
                  - button "" [ref=e567]:
                    - generic [ref=e568]: 
            - row " 9485260 Auto PIM User  " [ref=e570] [cursor=pointer]:
              - cell "" [ref=e571]:
                - generic [ref=e574]:
                  - checkbox "" [ref=e575]
                  - generic [ref=e577]: 
              - cell "9485260" [ref=e578]:
                - generic [ref=e579]: "9485260"
              - cell "Auto PIM" [ref=e580]:
                - generic [ref=e581]: Auto PIM
              - cell "User" [ref=e582]:
                - generic [ref=e583]: User
              - cell [ref=e584]
              - cell [ref=e585]
              - cell [ref=e586]
              - cell [ref=e587]
              - cell " " [ref=e588]:
                - generic [ref=e589]:
                  - button "" [ref=e590]:
                    - generic [ref=e591]: 
                  - button "" [ref=e592]:
                    - generic [ref=e593]: 
            - row " 9231782 Auto PIM User  " [ref=e595] [cursor=pointer]:
              - cell "" [ref=e596]:
                - generic [ref=e599]:
                  - checkbox "" [ref=e600]
                  - generic [ref=e602]: 
              - cell "9231782" [ref=e603]:
                - generic [ref=e604]: "9231782"
              - cell "Auto PIM" [ref=e605]:
                - generic [ref=e606]: Auto PIM
              - cell "User" [ref=e607]:
                - generic [ref=e608]: User
              - cell [ref=e609]
              - cell [ref=e610]
              - cell [ref=e611]
              - cell [ref=e612]
              - cell " " [ref=e613]:
                - generic [ref=e614]:
                  - button "" [ref=e615]:
                    - generic [ref=e616]: 
                  - button "" [ref=e617]:
                    - generic [ref=e618]: 
            - row " 9318157 Auto PIM User  " [ref=e620] [cursor=pointer]:
              - cell "" [ref=e621]:
                - generic [ref=e624]:
                  - checkbox "" [ref=e625]
                  - generic [ref=e627]: 
              - cell "9318157" [ref=e628]:
                - generic [ref=e629]: "9318157"
              - cell "Auto PIM" [ref=e630]:
                - generic [ref=e631]: Auto PIM
              - cell "User" [ref=e632]:
                - generic [ref=e633]: User
              - cell [ref=e634]
              - cell [ref=e635]
              - cell [ref=e636]
              - cell [ref=e637]
              - cell " " [ref=e638]:
                - generic [ref=e639]:
                  - button "" [ref=e640]:
                    - generic [ref=e641]: 
                  - button "" [ref=e642]:
                    - generic [ref=e643]: 
            - row " 9201459 Auto PIM User  " [ref=e645] [cursor=pointer]:
              - cell "" [ref=e646]:
                - generic [ref=e649]:
                  - checkbox "" [ref=e650]
                  - generic [ref=e652]: 
              - cell "9201459" [ref=e653]:
                - generic [ref=e654]: "9201459"
              - cell "Auto PIM" [ref=e655]:
                - generic [ref=e656]: Auto PIM
              - cell "User" [ref=e657]:
                - generic [ref=e658]: User
              - cell [ref=e659]
              - cell [ref=e660]
              - cell [ref=e661]
              - cell [ref=e662]
              - cell " " [ref=e663]:
                - generic [ref=e664]:
                  - button "" [ref=e665]:
                    - generic [ref=e666]: 
                  - button "" [ref=e667]:
                    - generic [ref=e668]: 
            - row " 9573735 Auto PIM User  " [ref=e670] [cursor=pointer]:
              - cell "" [ref=e671]:
                - generic [ref=e674]:
                  - checkbox "" [ref=e675]
                  - generic [ref=e677]: 
              - cell "9573735" [ref=e678]:
                - generic [ref=e679]: "9573735"
              - cell "Auto PIM" [ref=e680]:
                - generic [ref=e681]: Auto PIM
              - cell "User" [ref=e682]:
                - generic [ref=e683]: User
              - cell [ref=e684]
              - cell [ref=e685]
              - cell [ref=e686]
              - cell [ref=e687]
              - cell " " [ref=e688]:
                - generic [ref=e689]:
                  - button "" [ref=e690]:
                    - generic [ref=e691]: 
                  - button "" [ref=e692]:
                    - generic [ref=e693]: 
            - row " 9258243 Auto PIM User  " [ref=e695] [cursor=pointer]:
              - cell "" [ref=e696]:
                - generic [ref=e699]:
                  - checkbox "" [ref=e700]
                  - generic [ref=e702]: 
              - cell "9258243" [ref=e703]:
                - generic [ref=e704]: "9258243"
              - cell "Auto PIM" [ref=e705]:
                - generic [ref=e706]: Auto PIM
              - cell "User" [ref=e707]:
                - generic [ref=e708]: User
              - cell [ref=e709]
              - cell [ref=e710]
              - cell [ref=e711]
              - cell [ref=e712]
              - cell " " [ref=e713]:
                - generic [ref=e714]:
                  - button "" [ref=e715]:
                    - generic [ref=e716]: 
                  - button "" [ref=e717]:
                    - generic [ref=e718]: 
            - row " 9164868 Auto PIM User  " [ref=e720] [cursor=pointer]:
              - cell "" [ref=e721]:
                - generic [ref=e724]:
                  - checkbox "" [ref=e725]
                  - generic [ref=e727]: 
              - cell "9164868" [ref=e728]:
                - generic [ref=e729]: "9164868"
              - cell "Auto PIM" [ref=e730]:
                - generic [ref=e731]: Auto PIM
              - cell "User" [ref=e732]:
                - generic [ref=e733]: User
              - cell [ref=e734]
              - cell [ref=e735]
              - cell [ref=e736]
              - cell [ref=e737]
              - cell " " [ref=e738]:
                - generic [ref=e739]:
                  - button "" [ref=e740]:
                    - generic [ref=e741]: 
                  - button "" [ref=e742]:
                    - generic [ref=e743]: 
            - row " 9709276 Auto PIM User  " [ref=e745] [cursor=pointer]:
              - cell "" [ref=e746]:
                - generic [ref=e749]:
                  - checkbox "" [ref=e750]
                  - generic [ref=e752]: 
              - cell "9709276" [ref=e753]:
                - generic [ref=e754]: "9709276"
              - cell "Auto PIM" [ref=e755]:
                - generic [ref=e756]: Auto PIM
              - cell "User" [ref=e757]:
                - generic [ref=e758]: User
              - cell [ref=e759]
              - cell [ref=e760]
              - cell [ref=e761]
              - cell [ref=e762]
              - cell " " [ref=e763]:
                - generic [ref=e764]:
                  - button "" [ref=e765]:
                    - generic [ref=e766]: 
                  - button "" [ref=e767]:
                    - generic [ref=e768]: 
            - row " 9723451 Auto PIM User  " [ref=e770] [cursor=pointer]:
              - cell "" [ref=e771]:
                - generic [ref=e774]:
                  - checkbox "" [ref=e775]
                  - generic [ref=e777]: 
              - cell "9723451" [ref=e778]:
                - generic [ref=e779]: "9723451"
              - cell "Auto PIM" [ref=e780]:
                - generic [ref=e781]: Auto PIM
              - cell "User" [ref=e782]:
                - generic [ref=e783]: User
              - cell [ref=e784]
              - cell [ref=e785]
              - cell [ref=e786]
              - cell [ref=e787]
              - cell " " [ref=e788]:
                - generic [ref=e789]:
                  - button "" [ref=e790]:
                    - generic [ref=e791]: 
                  - button "" [ref=e792]:
                    - generic [ref=e793]: 
            - row " 9450395 Auto PIM User  " [ref=e795] [cursor=pointer]:
              - cell "" [ref=e796]:
                - generic [ref=e799]:
                  - checkbox "" [ref=e800]
                  - generic [ref=e802]: 
              - cell "9450395" [ref=e803]:
                - generic [ref=e804]: "9450395"
              - cell "Auto PIM" [ref=e805]:
                - generic [ref=e806]: Auto PIM
              - cell "User" [ref=e807]:
                - generic [ref=e808]: User
              - cell [ref=e809]
              - cell [ref=e810]
              - cell [ref=e811]
              - cell [ref=e812]
              - cell " " [ref=e813]:
                - generic [ref=e814]:
                  - button "" [ref=e815]:
                    - generic [ref=e816]: 
                  - button "" [ref=e817]:
                    - generic [ref=e818]: 
            - row " 9463145 Auto PIM User  " [ref=e820] [cursor=pointer]:
              - cell "" [ref=e821]:
                - generic [ref=e824]:
                  - checkbox "" [ref=e825]
                  - generic [ref=e827]: 
              - cell "9463145" [ref=e828]:
                - generic [ref=e829]: "9463145"
              - cell "Auto PIM" [ref=e830]:
                - generic [ref=e831]: Auto PIM
              - cell "User" [ref=e832]:
                - generic [ref=e833]: User
              - cell [ref=e834]
              - cell [ref=e835]
              - cell [ref=e836]
              - cell [ref=e837]
              - cell " " [ref=e838]:
                - generic [ref=e839]:
                  - button "" [ref=e840]:
                    - generic [ref=e841]: 
                  - button "" [ref=e842]:
                    - generic [ref=e843]: 
            - row " 9223910 Auto PIM User  " [ref=e845] [cursor=pointer]:
              - cell "" [ref=e846]:
                - generic [ref=e849]:
                  - checkbox "" [ref=e850]
                  - generic [ref=e852]: 
              - cell "9223910" [ref=e853]:
                - generic [ref=e854]: "9223910"
              - cell "Auto PIM" [ref=e855]:
                - generic [ref=e856]: Auto PIM
              - cell "User" [ref=e857]:
                - generic [ref=e858]: User
              - cell [ref=e859]
              - cell [ref=e860]
              - cell [ref=e861]
              - cell [ref=e862]
              - cell " " [ref=e863]:
                - generic [ref=e864]:
                  - button "" [ref=e865]:
                    - generic [ref=e866]: 
                  - button "" [ref=e867]:
                    - generic [ref=e868]: 
            - row " 9304388 Auto PIM User  " [ref=e870] [cursor=pointer]:
              - cell "" [ref=e871]:
                - generic [ref=e874]:
                  - checkbox "" [ref=e875]
                  - generic [ref=e877]: 
              - cell "9304388" [ref=e878]:
                - generic [ref=e879]: "9304388"
              - cell "Auto PIM" [ref=e880]:
                - generic [ref=e881]: Auto PIM
              - cell "User" [ref=e882]:
                - generic [ref=e883]: User
              - cell [ref=e884]
              - cell [ref=e885]
              - cell [ref=e886]
              - cell [ref=e887]
              - cell " " [ref=e888]:
                - generic [ref=e889]:
                  - button "" [ref=e890]:
                    - generic [ref=e891]: 
                  - button "" [ref=e892]:
                    - generic [ref=e893]: 
            - row " 9194912 Auto PIM User  " [ref=e895] [cursor=pointer]:
              - cell "" [ref=e896]:
                - generic [ref=e899]:
                  - checkbox "" [ref=e900]
                  - generic [ref=e902]: 
              - cell "9194912" [ref=e903]:
                - generic [ref=e904]: "9194912"
              - cell "Auto PIM" [ref=e905]:
                - generic [ref=e906]: Auto PIM
              - cell "User" [ref=e907]:
                - generic [ref=e908]: User
              - cell [ref=e909]
              - cell [ref=e910]
              - cell [ref=e911]
              - cell [ref=e912]
              - cell " " [ref=e913]:
                - generic [ref=e914]:
                  - button "" [ref=e915]:
                    - generic [ref=e916]: 
                  - button "" [ref=e917]:
                    - generic [ref=e918]: 
            - row " 9092621 Auto PIM User  " [ref=e920] [cursor=pointer]:
              - cell "" [ref=e921]:
                - generic [ref=e924]:
                  - checkbox "" [ref=e925]
                  - generic [ref=e927]: 
              - cell "9092621" [ref=e928]:
                - generic [ref=e929]: "9092621"
              - cell "Auto PIM" [ref=e930]:
                - generic [ref=e931]: Auto PIM
              - cell "User" [ref=e932]:
                - generic [ref=e933]: User
              - cell [ref=e934]
              - cell [ref=e935]
              - cell [ref=e936]
              - cell [ref=e937]
              - cell " " [ref=e938]:
                - generic [ref=e939]:
                  - button "" [ref=e940]:
                    - generic [ref=e941]: 
                  - button "" [ref=e942]:
                    - generic [ref=e943]: 
            - row " 9809187 Auto PIM User  " [ref=e945] [cursor=pointer]:
              - cell "" [ref=e946]:
                - generic [ref=e949]:
                  - checkbox "" [ref=e950]
                  - generic [ref=e952]: 
              - cell "9809187" [ref=e953]:
                - generic [ref=e954]: "9809187"
              - cell "Auto PIM" [ref=e955]:
                - generic [ref=e956]: Auto PIM
              - cell "User" [ref=e957]:
                - generic [ref=e958]: User
              - cell [ref=e959]
              - cell [ref=e960]
              - cell [ref=e961]
              - cell [ref=e962]
              - cell " " [ref=e963]:
                - generic [ref=e964]:
                  - button "" [ref=e965]:
                    - generic [ref=e966]: 
                  - button "" [ref=e967]:
                    - generic [ref=e968]: 
            - row " 9848045 Auto PIM User  " [ref=e970] [cursor=pointer]:
              - cell "" [ref=e971]:
                - generic [ref=e974]:
                  - checkbox "" [ref=e975]
                  - generic [ref=e977]: 
              - cell "9848045" [ref=e978]:
                - generic [ref=e979]: "9848045"
              - cell "Auto PIM" [ref=e980]:
                - generic [ref=e981]: Auto PIM
              - cell "User" [ref=e982]:
                - generic [ref=e983]: User
              - cell [ref=e984]
              - cell [ref=e985]
              - cell [ref=e986]
              - cell [ref=e987]
              - cell " " [ref=e988]:
                - generic [ref=e989]:
                  - button "" [ref=e990]:
                    - generic [ref=e991]: 
                  - button "" [ref=e992]:
                    - generic [ref=e993]: 
            - row " 9549185 Auto PIM User  " [ref=e995] [cursor=pointer]:
              - cell "" [ref=e996]:
                - generic [ref=e999]:
                  - checkbox "" [ref=e1000]
                  - generic [ref=e1002]: 
              - cell "9549185" [ref=e1003]:
                - generic [ref=e1004]: "9549185"
              - cell "Auto PIM" [ref=e1005]:
                - generic [ref=e1006]: Auto PIM
              - cell "User" [ref=e1007]:
                - generic [ref=e1008]: User
              - cell [ref=e1009]
              - cell [ref=e1010]
              - cell [ref=e1011]
              - cell [ref=e1012]
              - cell " " [ref=e1013]:
                - generic [ref=e1014]:
                  - button "" [ref=e1015]:
                    - generic [ref=e1016]: 
                  - button "" [ref=e1017]:
                    - generic [ref=e1018]: 
            - row " 9257517 Auto PIM User  " [ref=e1020] [cursor=pointer]:
              - cell "" [ref=e1021]:
                - generic [ref=e1024]:
                  - checkbox "" [ref=e1025]
                  - generic [ref=e1027]: 
              - cell "9257517" [ref=e1028]:
                - generic [ref=e1029]: "9257517"
              - cell "Auto PIM" [ref=e1030]:
                - generic [ref=e1031]: Auto PIM
              - cell "User" [ref=e1032]:
                - generic [ref=e1033]: User
              - cell [ref=e1034]
              - cell [ref=e1035]
              - cell [ref=e1036]
              - cell [ref=e1037]
              - cell " " [ref=e1038]:
                - generic [ref=e1039]:
                  - button "" [ref=e1040]:
                    - generic [ref=e1041]: 
                  - button "" [ref=e1042]:
                    - generic [ref=e1043]: 
            - row " 9162547 Auto PIM User  " [ref=e1045] [cursor=pointer]:
              - cell "" [ref=e1046]:
                - generic [ref=e1049]:
                  - checkbox "" [ref=e1050]
                  - generic [ref=e1052]: 
              - cell "9162547" [ref=e1053]:
                - generic [ref=e1054]: "9162547"
              - cell "Auto PIM" [ref=e1055]:
                - generic [ref=e1056]: Auto PIM
              - cell "User" [ref=e1057]:
                - generic [ref=e1058]: User
              - cell [ref=e1059]
              - cell [ref=e1060]
              - cell [ref=e1061]
              - cell [ref=e1062]
              - cell " " [ref=e1063]:
                - generic [ref=e1064]:
                  - button "" [ref=e1065]:
                    - generic [ref=e1066]: 
                  - button "" [ref=e1067]:
                    - generic [ref=e1068]: 
            - row " 9699385 Auto PIM User  " [ref=e1070] [cursor=pointer]:
              - cell "" [ref=e1071]:
                - generic [ref=e1074]:
                  - checkbox "" [ref=e1075]
                  - generic [ref=e1077]: 
              - cell "9699385" [ref=e1078]:
                - generic [ref=e1079]: "9699385"
              - cell "Auto PIM" [ref=e1080]:
                - generic [ref=e1081]: Auto PIM
              - cell "User" [ref=e1082]:
                - generic [ref=e1083]: User
              - cell [ref=e1084]
              - cell [ref=e1085]
              - cell [ref=e1086]
              - cell [ref=e1087]
              - cell " " [ref=e1088]:
                - generic [ref=e1089]:
                  - button "" [ref=e1090]:
                    - generic [ref=e1091]: 
                  - button "" [ref=e1092]:
                    - generic [ref=e1093]: 
            - row " 9423885 Auto PIM User  " [ref=e1095] [cursor=pointer]:
              - cell "" [ref=e1096]:
                - generic [ref=e1099]:
                  - checkbox "" [ref=e1100]
                  - generic [ref=e1102]: 
              - cell "9423885" [ref=e1103]:
                - generic [ref=e1104]: "9423885"
              - cell "Auto PIM" [ref=e1105]:
                - generic [ref=e1106]: Auto PIM
              - cell "User" [ref=e1107]:
                - generic [ref=e1108]: User
              - cell [ref=e1109]
              - cell [ref=e1110]
              - cell [ref=e1111]
              - cell [ref=e1112]
              - cell " " [ref=e1113]:
                - generic [ref=e1114]:
                  - button "" [ref=e1115]:
                    - generic [ref=e1116]: 
                  - button "" [ref=e1117]:
                    - generic [ref=e1118]: 
            - row " 9223371 Auto PIM User  " [ref=e1120] [cursor=pointer]:
              - cell "" [ref=e1121]:
                - generic [ref=e1124]:
                  - checkbox "" [ref=e1125]
                  - generic [ref=e1127]: 
              - cell "9223371" [ref=e1128]:
                - generic [ref=e1129]: "9223371"
              - cell "Auto PIM" [ref=e1130]:
                - generic [ref=e1131]: Auto PIM
              - cell "User" [ref=e1132]:
                - generic [ref=e1133]: User
              - cell [ref=e1134]
              - cell [ref=e1135]
              - cell [ref=e1136]
              - cell [ref=e1137]
              - cell " " [ref=e1138]:
                - generic [ref=e1139]:
                  - button "" [ref=e1140]:
                    - generic [ref=e1141]: 
                  - button "" [ref=e1142]:
                    - generic [ref=e1143]: 
            - row " 9298661 Auto PIM User  " [ref=e1145] [cursor=pointer]:
              - cell "" [ref=e1146]:
                - generic [ref=e1149]:
                  - checkbox "" [ref=e1150]
                  - generic [ref=e1152]: 
              - cell "9298661" [ref=e1153]:
                - generic [ref=e1154]: "9298661"
              - cell "Auto PIM" [ref=e1155]:
                - generic [ref=e1156]: Auto PIM
              - cell "User" [ref=e1157]:
                - generic [ref=e1158]: User
              - cell [ref=e1159]
              - cell [ref=e1160]
              - cell [ref=e1161]
              - cell [ref=e1162]
              - cell " " [ref=e1163]:
                - generic [ref=e1164]:
                  - button "" [ref=e1165]:
                    - generic [ref=e1166]: 
                  - button "" [ref=e1167]:
                    - generic [ref=e1168]: 
            - row " 9191046 Auto PIM User  " [ref=e1170] [cursor=pointer]:
              - cell "" [ref=e1171]:
                - generic [ref=e1174]:
                  - checkbox "" [ref=e1175]
                  - generic [ref=e1177]: 
              - cell "9191046" [ref=e1178]:
                - generic [ref=e1179]: "9191046"
              - cell "Auto PIM" [ref=e1180]:
                - generic [ref=e1181]: Auto PIM
              - cell "User" [ref=e1182]:
                - generic [ref=e1183]: User
              - cell [ref=e1184]
              - cell [ref=e1185]
              - cell [ref=e1186]
              - cell [ref=e1187]
              - cell " " [ref=e1188]:
                - generic [ref=e1189]:
                  - button "" [ref=e1190]:
                    - generic [ref=e1191]: 
                  - button "" [ref=e1192]:
                    - generic [ref=e1193]: 
            - row " 9785902 Auto PIM User  " [ref=e1195] [cursor=pointer]:
              - cell "" [ref=e1196]:
                - generic [ref=e1199]:
                  - checkbox "" [ref=e1200]
                  - generic [ref=e1202]: 
              - cell "9785902" [ref=e1203]:
                - generic [ref=e1204]: "9785902"
              - cell "Auto PIM" [ref=e1205]:
                - generic [ref=e1206]: Auto PIM
              - cell "User" [ref=e1207]:
                - generic [ref=e1208]: User
              - cell [ref=e1209]
              - cell [ref=e1210]
              - cell [ref=e1211]
              - cell [ref=e1212]
              - cell " " [ref=e1213]:
                - generic [ref=e1214]:
                  - button "" [ref=e1215]:
                    - generic [ref=e1216]: 
                  - button "" [ref=e1217]:
                    - generic [ref=e1218]: 
            - row " 9822359 Auto PIM User  " [ref=e1220] [cursor=pointer]:
              - cell "" [ref=e1221]:
                - generic [ref=e1224]:
                  - checkbox "" [ref=e1225]
                  - generic [ref=e1227]: 
              - cell "9822359" [ref=e1228]:
                - generic [ref=e1229]: "9822359"
              - cell "Auto PIM" [ref=e1230]:
                - generic [ref=e1231]: Auto PIM
              - cell "User" [ref=e1232]:
                - generic [ref=e1233]: User
              - cell [ref=e1234]
              - cell [ref=e1235]
              - cell [ref=e1236]
              - cell [ref=e1237]
              - cell " " [ref=e1238]:
                - generic [ref=e1239]:
                  - button "" [ref=e1240]:
                    - generic [ref=e1241]: 
                  - button "" [ref=e1242]:
                    - generic [ref=e1243]: 
            - row " 9258403 Auto PIM User  " [ref=e1245] [cursor=pointer]:
              - cell "" [ref=e1246]:
                - generic [ref=e1249]:
                  - checkbox "" [ref=e1250]
                  - generic [ref=e1252]: 
              - cell "9258403" [ref=e1253]:
                - generic [ref=e1254]: "9258403"
              - cell "Auto PIM" [ref=e1255]:
                - generic [ref=e1256]: Auto PIM
              - cell "User" [ref=e1257]:
                - generic [ref=e1258]: User
              - cell [ref=e1259]
              - cell [ref=e1260]
              - cell [ref=e1261]
              - cell [ref=e1262]
              - cell " " [ref=e1263]:
                - generic [ref=e1264]:
                  - button "" [ref=e1265]:
                    - generic [ref=e1266]: 
                  - button "" [ref=e1267]:
                    - generic [ref=e1268]: 
            - row " 9154131 Auto PIM User  " [ref=e1270] [cursor=pointer]:
              - cell "" [ref=e1271]:
                - generic [ref=e1274]:
                  - checkbox "" [ref=e1275]
                  - generic [ref=e1277]: 
              - cell "9154131" [ref=e1278]:
                - generic [ref=e1279]: "9154131"
              - cell "Auto PIM" [ref=e1280]:
                - generic [ref=e1281]: Auto PIM
              - cell "User" [ref=e1282]:
                - generic [ref=e1283]: User
              - cell [ref=e1284]
              - cell [ref=e1285]
              - cell [ref=e1286]
              - cell [ref=e1287]
              - cell " " [ref=e1288]:
                - generic [ref=e1289]:
                  - button "" [ref=e1290]:
                    - generic [ref=e1291]: 
                  - button "" [ref=e1292]:
                    - generic [ref=e1293]: 
            - row " 9680802 Auto PIM User  " [ref=e1295] [cursor=pointer]:
              - cell "" [ref=e1296]:
                - generic [ref=e1299]:
                  - checkbox "" [ref=e1300]
                  - generic [ref=e1302]: 
              - cell "9680802" [ref=e1303]:
                - generic [ref=e1304]: "9680802"
              - cell "Auto PIM" [ref=e1305]:
                - generic [ref=e1306]: Auto PIM
              - cell "User" [ref=e1307]:
                - generic [ref=e1308]: User
              - cell [ref=e1309]
              - cell [ref=e1310]
              - cell [ref=e1311]
              - cell [ref=e1312]
              - cell " " [ref=e1313]:
                - generic [ref=e1314]:
                  - button "" [ref=e1315]:
                    - generic [ref=e1316]: 
                  - button "" [ref=e1317]:
                    - generic [ref=e1318]: 
            - row " 9663197 Auto PIM User  " [ref=e1320] [cursor=pointer]:
              - cell "" [ref=e1321]:
                - generic [ref=e1324]:
                  - checkbox "" [ref=e1325]
                  - generic [ref=e1327]: 
              - cell "9663197" [ref=e1328]:
                - generic [ref=e1329]: "9663197"
              - cell "Auto PIM" [ref=e1330]:
                - generic [ref=e1331]: Auto PIM
              - cell "User" [ref=e1332]:
                - generic [ref=e1333]: User
              - cell [ref=e1334]
              - cell [ref=e1335]
              - cell [ref=e1336]
              - cell [ref=e1337]
              - cell " " [ref=e1338]:
                - generic [ref=e1339]:
                  - button "" [ref=e1340]:
                    - generic [ref=e1341]: 
                  - button "" [ref=e1342]:
                    - generic [ref=e1343]: 
            - row " 9290245 Auto PIM User  " [ref=e1345] [cursor=pointer]:
              - cell "" [ref=e1346]:
                - generic [ref=e1349]:
                  - checkbox "" [ref=e1350]
                  - generic [ref=e1352]: 
              - cell "9290245" [ref=e1353]:
                - generic [ref=e1354]: "9290245"
              - cell "Auto PIM" [ref=e1355]:
                - generic [ref=e1356]: Auto PIM
              - cell "User" [ref=e1357]:
                - generic [ref=e1358]: User
              - cell [ref=e1359]
              - cell [ref=e1360]
              - cell [ref=e1361]
              - cell [ref=e1362]
              - cell " " [ref=e1363]:
                - generic [ref=e1364]:
                  - button "" [ref=e1365]:
                    - generic [ref=e1366]: 
                  - button "" [ref=e1367]:
                    - generic [ref=e1368]: 
            - row " 9189307 Auto PIM User  " [ref=e1370] [cursor=pointer]:
              - cell "" [ref=e1371]:
                - generic [ref=e1374]:
                  - checkbox "" [ref=e1375]
                  - generic [ref=e1377]: 
              - cell "9189307" [ref=e1378]:
                - generic [ref=e1379]: "9189307"
              - cell "Auto PIM" [ref=e1380]:
                - generic [ref=e1381]: Auto PIM
              - cell "User" [ref=e1382]:
                - generic [ref=e1383]: User
              - cell [ref=e1384]
              - cell [ref=e1385]
              - cell [ref=e1386]
              - cell [ref=e1387]
              - cell " " [ref=e1388]:
                - generic [ref=e1389]:
                  - button "" [ref=e1390]:
                    - generic [ref=e1391]: 
                  - button "" [ref=e1392]:
                    - generic [ref=e1393]: 
            - row " 9765091 Auto PIM User  " [ref=e1395] [cursor=pointer]:
              - cell "" [ref=e1396]:
                - generic [ref=e1399]:
                  - checkbox "" [ref=e1400]
                  - generic [ref=e1402]: 
              - cell "9765091" [ref=e1403]:
                - generic [ref=e1404]: "9765091"
              - cell "Auto PIM" [ref=e1405]:
                - generic [ref=e1406]: Auto PIM
              - cell "User" [ref=e1407]:
                - generic [ref=e1408]: User
              - cell [ref=e1409]
              - cell [ref=e1410]
              - cell [ref=e1411]
              - cell [ref=e1412]
              - cell " " [ref=e1413]:
                - generic [ref=e1414]:
                  - button "" [ref=e1415]:
                    - generic [ref=e1416]: 
                  - button "" [ref=e1417]:
                    - generic [ref=e1418]: 
            - row " 9799920 Auto PIM User  " [ref=e1420] [cursor=pointer]:
              - cell "" [ref=e1421]:
                - generic [ref=e1424]:
                  - checkbox "" [ref=e1425]
                  - generic [ref=e1427]: 
              - cell "9799920" [ref=e1428]:
                - generic [ref=e1429]: "9799920"
              - cell "Auto PIM" [ref=e1430]:
                - generic [ref=e1431]: Auto PIM
              - cell "User" [ref=e1432]:
                - generic [ref=e1433]: User
              - cell [ref=e1434]
              - cell [ref=e1435]
              - cell [ref=e1436]
              - cell [ref=e1437]
              - cell " " [ref=e1438]:
                - generic [ref=e1439]:
                  - button "" [ref=e1440]:
                    - generic [ref=e1441]: 
                  - button "" [ref=e1442]:
                    - generic [ref=e1443]: 
            - row " 9568950 Auto PIM User  " [ref=e1445] [cursor=pointer]:
              - cell "" [ref=e1446]:
                - generic [ref=e1449]:
                  - checkbox "" [ref=e1450]
                  - generic [ref=e1452]: 
              - cell "9568950" [ref=e1453]:
                - generic [ref=e1454]: "9568950"
              - cell "Auto PIM" [ref=e1455]:
                - generic [ref=e1456]: Auto PIM
              - cell "User" [ref=e1457]:
                - generic [ref=e1458]: User
              - cell [ref=e1459]
              - cell [ref=e1460]
              - cell [ref=e1461]
              - cell [ref=e1462]
              - cell " " [ref=e1463]:
                - generic [ref=e1464]:
                  - button "" [ref=e1465]:
                    - generic [ref=e1466]: 
                  - button "" [ref=e1467]:
                    - generic [ref=e1468]: 
            - row " 9525715 Auto PIM User  " [ref=e1470] [cursor=pointer]:
              - cell "" [ref=e1471]:
                - generic [ref=e1474]:
                  - checkbox "" [ref=e1475]
                  - generic [ref=e1477]: 
              - cell "9525715" [ref=e1478]:
                - generic [ref=e1479]: "9525715"
              - cell "Auto PIM" [ref=e1480]:
                - generic [ref=e1481]: Auto PIM
              - cell "User" [ref=e1482]:
                - generic [ref=e1483]: User
              - cell [ref=e1484]
              - cell [ref=e1485]
              - cell [ref=e1486]
              - cell [ref=e1487]
              - cell " " [ref=e1488]:
                - generic [ref=e1489]:
                  - button "" [ref=e1490]:
                    - generic [ref=e1491]: 
                  - button "" [ref=e1492]:
                    - generic [ref=e1493]: 
            - row " 9245287 Auto PIM User  " [ref=e1495] [cursor=pointer]:
              - cell "" [ref=e1496]:
                - generic [ref=e1499]:
                  - checkbox "" [ref=e1500]
                  - generic [ref=e1502]: 
              - cell "9245287" [ref=e1503]:
                - generic [ref=e1504]: "9245287"
              - cell "Auto PIM" [ref=e1505]:
                - generic [ref=e1506]: Auto PIM
              - cell "User" [ref=e1507]:
                - generic [ref=e1508]: User
              - cell [ref=e1509]
              - cell [ref=e1510]
              - cell [ref=e1511]
              - cell [ref=e1512]
              - cell " " [ref=e1513]:
                - generic [ref=e1514]:
                  - button "" [ref=e1515]:
                    - generic [ref=e1516]: 
                  - button "" [ref=e1517]:
                    - generic [ref=e1518]: 
        - navigation "Pagination Navigation" [ref=e1520]:
          - list [ref=e1521]:
            - listitem [ref=e1522]:
              - button "1" [ref=e1523] [cursor=pointer]
            - listitem [ref=e1524]:
              - button "2" [ref=e1525] [cursor=pointer]
            - listitem [ref=e1526]:
              - button "3" [ref=e1527] [cursor=pointer]
            - listitem [ref=e1528]:
              - button "4" [ref=e1529] [cursor=pointer]
            - listitem [ref=e1530]:
              - button "5" [ref=e1531] [cursor=pointer]
            - listitem [ref=e1532]:
              - button "" [ref=e1533] [cursor=pointer]:
                - generic [ref=e1534]: 
    - generic [ref=e1535]:
      - paragraph [ref=e1536]: OrangeHRM OS 5.8
      - paragraph [ref=e1537]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e1538] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  189 |   async uploadProfileImage(filePath) {
  190 | 
  191 |     console.log(
  192 |       'Before click:',
  193 |       this.page.url()
  194 |     );
  195 | 
  196 |     await this.profilePictureImage.click();
  197 | 
  198 |     await this.page.waitForURL(
  199 |       '**/viewPhotograph/**',
  200 |       {
  201 |         timeout: 30000
  202 |       }
  203 |     );
  204 | 
  205 |     console.log(
  206 |       'After click:',
  207 |       this.page.url()
  208 |     );
  209 | 
  210 |     await this.profileImage.waitFor({
  211 |       state: 'attached',
  212 |       timeout: 30000
  213 |     });
  214 | 
  215 |     await this.profileImage.setInputFiles(
  216 |       filePath
  217 |     );
  218 | 
  219 |     await this.profileImageSaveButton.click();
  220 |   }
  221 | 
  222 |   async verifyProfileImageUploaded() {
  223 | 
  224 |   await expect(
  225 |     this.page.getByText(
  226 |         'Successfully Updated'
  227 |       )
  228 |     ).toBeVisible({
  229 |       timeout: 10000
  230 |     });
  231 |   }
  232 | 
  233 |   async editEmployee() {
  234 | 
  235 |     await this.firstEmployeeEditButton.click();
  236 | 
  237 |     await this.personalDetailsHeader
  238 |       .waitFor({
  239 |         state: 'visible'
  240 |       });
  241 | 
  242 |     await this.middleNameInput.fill(
  243 |       'Updated'
  244 |     );
  245 | 
  246 |     await this.personalSaveButton.click();
  247 | 
  248 |     await expect(
  249 |       this.successUpdateToast
  250 |     ).toBeVisible({
  251 |       timeout: 10000
  252 |     });
  253 |   }
  254 | 
  255 |   async deleteEmployee() {
  256 | 
  257 |     await this.firstEmployeeDeleteButton
  258 |       .click();
  259 | 
  260 |     await this.confirmDeleteButton
  261 |       .click();
  262 | 
  263 |     await expect(
  264 |       this.deleteSuccessToast
  265 |     ).toBeVisible({
  266 |       timeout: 10000
  267 |     });
  268 |   }
  269 | 
  270 |   async getFirstEmployeeId() {
  271 | 
  272 |     await this.employeeTableRows.first().waitFor();
  273 | 
  274 |     const firstRow =
  275 |       await this.employeeTableRows.first().textContent();
  276 | 
  277 |     const employeeId =
  278 |       firstRow.match(/\d+/)?.[0];
  279 | 
  280 |     return employeeId;
  281 |   }
  282 | 
  283 |   async searchEmployeeById(employeeId) {
  284 | 
  285 |     await this.page.waitForURL(
  286 |       '**/viewEmployeeList'
  287 |     );
  288 | 
> 289 |     await this.employeeIdSearch.waitFor({
      |                                 ^ TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
  290 |       state: 'visible',
  291 |       timeout: 30000
  292 |     });
  293 | 
  294 |     await this.employeeIdSearch.fill(
  295 |       employeeId
  296 |     );
  297 | 
  298 |     await this.searchButton.click();
  299 |   }
  300 | 
  301 |   async verifyEmployeeIdSearch(employeeId) {
  302 | 
  303 |     await this.employeeTableRows.first().waitFor({
  304 |       state: 'visible'
  305 |     });
  306 | 
  307 |     const tableText =
  308 |       await this.employeeTableRows.first()
  309 |         .textContent();
  310 | 
  311 |     expect(tableText)
  312 |       .toContain(employeeId);
  313 |   }
  314 | 
  315 |   async resetEmployeeSearch() {
  316 | 
  317 |     await this.employeeNameSearch.fill(
  318 |       'Test Employee'
  319 |     );
  320 | 
  321 |     await this.resetButton.click();
  322 | 
  323 |     await expect(
  324 |       this.employeeNameSearch
  325 |     ).toHaveValue('');
  326 |   }
  327 | 
  328 |   async verifyPIMPageLoaded() {
  329 | 
  330 |     await expect(
  331 |       this.pimMenu
  332 |     ).toBeVisible();
  333 | 
  334 |     await expect(
  335 |       this.searchButton
  336 |     ).toBeVisible();
  337 |   }
  338 | 
  339 |   async verifyAddEmployeeButtonVisible() {
  340 | 
  341 |     await expect(
  342 |       this.addEmployeeButton
  343 |     ).toBeVisible();
  344 |   }
  345 | 
  346 |   async cancelAddEmployee() {
  347 | 
  348 |     await this.clickAddEmployee();
  349 | 
  350 |     await this.cancelButton.click();
  351 | 
  352 |     await this.page.waitForURL(
  353 |       '**/viewEmployeeList'
  354 |     );
  355 | 
  356 |     await expect(
  357 |       this.searchButton
  358 |     ).toBeVisible();
  359 |   }
  360 | 
  361 |   async verifyPersonalDetailsPage() {
  362 | 
  363 |     await this.clickAddEmployee();
  364 | 
  365 |     await expect(
  366 |       this.personalDetailsHeader
  367 |     ).toBeVisible();
  368 |   }
  369 | 
  370 |   async verifyAddEmployeePageLoaded() {
  371 | 
  372 |     await this.clickAddEmployee();
  373 | 
  374 |     await expect(
  375 |       this.addEmployeeHeader
  376 |     ).toBeVisible();
  377 |   }
  378 | 
  379 |   async verifySaveButtonVisible() {
  380 | 
  381 |     await this.clickAddEmployee();
  382 | 
  383 |     await expect(
  384 |       this.saveButton
  385 |     ).toBeVisible();
  386 |   }
  387 | 
  388 |   async verifyCancelButtonVisible() {
  389 | 
```
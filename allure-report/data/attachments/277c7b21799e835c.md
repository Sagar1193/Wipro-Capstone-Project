# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim\pim.spec.js >> PIM Module Tests >> Search Employee By ID
- Location: tests\pim\pim.spec.js:199:3

# Error details

```
TimeoutError: locator.fill: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('.oxd-form-row .oxd-input').nth(1)

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
              - paragraph [ref=e127]: Brenden QA
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
          - generic [ref=e233]: (36) Records Found
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
            - row " 0486 AI Tester  " [ref=e268] [cursor=pointer]:
              - cell "" [ref=e269]:
                - generic [ref=e272]:
                  - checkbox "" [ref=e273]
                  - generic [ref=e275]: 
              - cell "0486" [ref=e276]:
                - generic [ref=e277]: "0486"
              - cell "AI" [ref=e278]:
                - generic [ref=e279]: AI
              - cell "Tester" [ref=e280]:
                - generic [ref=e281]: Tester
              - cell [ref=e282]
              - cell [ref=e283]
              - cell [ref=e284]
              - cell [ref=e285]
              - cell " " [ref=e286]:
                - generic [ref=e287]:
                  - button "" [ref=e288]:
                    - generic [ref=e289]: 
                  - button "" [ref=e290]:
                    - generic [ref=e291]: 
            - row " 0925 Aleksandra Admin  " [ref=e293] [cursor=pointer]:
              - cell "" [ref=e294]:
                - generic [ref=e297]:
                  - checkbox "" [ref=e298]
                  - generic [ref=e300]: 
              - cell "0925" [ref=e301]:
                - generic [ref=e302]: "0925"
              - cell "Aleksandra" [ref=e303]:
                - generic [ref=e304]: Aleksandra
              - cell "Admin" [ref=e305]:
                - generic [ref=e306]: Admin
              - cell [ref=e307]
              - cell [ref=e308]
              - cell [ref=e309]
              - cell [ref=e310]
              - cell " " [ref=e311]:
                - generic [ref=e312]:
                  - button "" [ref=e313]:
                    - generic [ref=e314]: 
                  - button "" [ref=e315]:
                    - generic [ref=e316]: 
            - row " 540 aniket Ashok patil  " [ref=e318] [cursor=pointer]:
              - cell "" [ref=e319]:
                - generic [ref=e322]:
                  - checkbox "" [ref=e323]
                  - generic [ref=e325]: 
              - cell "540" [ref=e326]:
                - generic [ref=e327]: "540"
              - cell "aniket Ashok" [ref=e328]:
                - generic [ref=e329]: aniket Ashok
              - cell "patil" [ref=e330]:
                - generic [ref=e331]: patil
              - cell [ref=e332]
              - cell [ref=e333]
              - cell [ref=e334]
              - cell [ref=e335]
              - cell " " [ref=e336]:
                - generic [ref=e337]:
                  - button "" [ref=e338]:
                    - generic [ref=e339]: 
                  - button "" [ref=e340]:
                    - generic [ref=e341]: 
            - row " 0497 Arey Accept B  " [ref=e343] [cursor=pointer]:
              - cell "" [ref=e344]:
                - generic [ref=e347]:
                  - checkbox "" [ref=e348]
                  - generic [ref=e350]: 
              - cell "0497" [ref=e351]:
                - generic [ref=e352]: "0497"
              - cell "Arey Accept" [ref=e353]:
                - generic [ref=e354]: Arey Accept
              - cell "B" [ref=e355]:
                - generic [ref=e356]: B
              - cell [ref=e357]
              - cell [ref=e358]
              - cell [ref=e359]
              - cell [ref=e360]
              - cell " " [ref=e361]:
                - generic [ref=e362]:
                  - button "" [ref=e363]:
                    - generic [ref=e364]: 
                  - button "" [ref=e365]:
                    - generic [ref=e366]: 
            - row " 0490 Auto Test User  " [ref=e368] [cursor=pointer]:
              - cell "" [ref=e369]:
                - generic [ref=e372]:
                  - checkbox "" [ref=e373]
                  - generic [ref=e375]: 
              - cell "0490" [ref=e376]:
                - generic [ref=e377]: "0490"
              - cell "Auto Test" [ref=e378]:
                - generic [ref=e379]: Auto Test
              - cell "User" [ref=e380]:
                - generic [ref=e381]: User
              - cell [ref=e382]
              - cell [ref=e383]
              - cell [ref=e384]
              - cell [ref=e385]
              - cell " " [ref=e386]:
                - generic [ref=e387]:
                  - button "" [ref=e388]:
                    - generic [ref=e389]: 
                  - button "" [ref=e390]:
                    - generic [ref=e391]: 
            - row " 914181 Auto User  " [ref=e393] [cursor=pointer]:
              - cell "" [ref=e394]:
                - generic [ref=e397]:
                  - checkbox "" [ref=e398]
                  - generic [ref=e400]: 
              - cell "914181" [ref=e401]:
                - generic [ref=e402]: "914181"
              - cell "Auto" [ref=e403]:
                - generic [ref=e404]: Auto
              - cell "User" [ref=e405]:
                - generic [ref=e406]: User
              - cell [ref=e407]
              - cell [ref=e408]
              - cell [ref=e409]
              - cell [ref=e410]
              - cell " " [ref=e411]:
                - generic [ref=e412]:
                  - button "" [ref=e413]:
                    - generic [ref=e414]: 
                  - button "" [ref=e415]:
                    - generic [ref=e416]: 
            - row " 0479 Auto Test User  " [ref=e418] [cursor=pointer]:
              - cell "" [ref=e419]:
                - generic [ref=e422]:
                  - checkbox "" [ref=e423]
                  - generic [ref=e425]: 
              - cell "0479" [ref=e426]:
                - generic [ref=e427]: "0479"
              - cell "Auto Test" [ref=e428]:
                - generic [ref=e429]: Auto Test
              - cell "User" [ref=e430]:
                - generic [ref=e431]: User
              - cell [ref=e432]
              - cell [ref=e433]
              - cell [ref=e434]
              - cell [ref=e435]
              - cell " " [ref=e436]:
                - generic [ref=e437]:
                  - button "" [ref=e438]:
                    - generic [ref=e439]: 
                  - button "" [ref=e440]:
                    - generic [ref=e441]: 
            - row " 0485 Auto Test User  " [ref=e443] [cursor=pointer]:
              - cell "" [ref=e444]:
                - generic [ref=e447]:
                  - checkbox "" [ref=e448]
                  - generic [ref=e450]: 
              - cell "0485" [ref=e451]:
                - generic [ref=e452]: "0485"
              - cell "Auto Test" [ref=e453]:
                - generic [ref=e454]: Auto Test
              - cell "User" [ref=e455]:
                - generic [ref=e456]: User
              - cell [ref=e457]
              - cell [ref=e458]
              - cell [ref=e459]
              - cell [ref=e460]
              - cell " " [ref=e461]:
                - generic [ref=e462]:
                  - button "" [ref=e463]:
                    - generic [ref=e464]: 
                  - button "" [ref=e465]:
                    - generic [ref=e466]: 
            - row " 0483 Auto1780046494276 User  " [ref=e468] [cursor=pointer]:
              - cell "" [ref=e469]:
                - generic [ref=e472]:
                  - checkbox "" [ref=e473]
                  - generic [ref=e475]: 
              - cell "0483" [ref=e476]:
                - generic [ref=e477]: "0483"
              - cell "Auto1780046494276" [ref=e478]:
                - generic [ref=e479]: Auto1780046494276
              - cell "User" [ref=e480]:
                - generic [ref=e481]: User
              - cell [ref=e482]
              - cell [ref=e483]
              - cell [ref=e484]
              - cell [ref=e485]
              - cell " " [ref=e486]:
                - generic [ref=e487]:
                  - button "" [ref=e488]:
                    - generic [ref=e489]: 
                  - button "" [ref=e490]:
                    - generic [ref=e491]: 
            - row " 0482 Auto1780046507379 Playwright  " [ref=e493] [cursor=pointer]:
              - cell "" [ref=e494]:
                - generic [ref=e497]:
                  - checkbox "" [ref=e498]
                  - generic [ref=e500]: 
              - cell "0482" [ref=e501]:
                - generic [ref=e502]: "0482"
              - cell "Auto1780046507379" [ref=e503]:
                - generic [ref=e504]: Auto1780046507379
              - cell "Playwright" [ref=e505]:
                - generic [ref=e506]: Playwright
              - cell [ref=e507]
              - cell [ref=e508]
              - cell [ref=e509]
              - cell [ref=e510]
              - cell " " [ref=e511]:
                - generic [ref=e512]:
                  - button "" [ref=e513]:
                    - generic [ref=e514]: 
                  - button "" [ref=e515]:
                    - generic [ref=e516]: 
            - row " 0496 Auto1780046907441 User  " [ref=e518] [cursor=pointer]:
              - cell "" [ref=e519]:
                - generic [ref=e522]:
                  - checkbox "" [ref=e523]
                  - generic [ref=e525]: 
              - cell "0496" [ref=e526]:
                - generic [ref=e527]: "0496"
              - cell "Auto1780046907441" [ref=e528]:
                - generic [ref=e529]: Auto1780046907441
              - cell "User" [ref=e530]:
                - generic [ref=e531]: User
              - cell [ref=e532]
              - cell [ref=e533]
              - cell [ref=e534]
              - cell [ref=e535]
              - cell " " [ref=e536]:
                - generic [ref=e537]:
                  - button "" [ref=e538]:
                    - generic [ref=e539]: 
                  - button "" [ref=e540]:
                    - generic [ref=e541]: 
            - row " muser Brenden akhill QA HR Manager Full-Time Permanent Human Resources " [ref=e543] [cursor=pointer]:
              - cell "" [ref=e544]:
                - generic [ref=e548]:
                  - checkbox "" [ref=e549]
                  - generic [ref=e551]: 
              - cell "muser" [ref=e552]:
                - generic [ref=e553]: muser
              - cell "Brenden akhill" [ref=e554]:
                - generic [ref=e555]: Brenden akhill
              - cell "QA" [ref=e556]:
                - generic [ref=e557]: QA
              - cell "HR Manager" [ref=e558]:
                - generic [ref=e559]: HR Manager
              - cell "Full-Time Permanent" [ref=e560]:
                - generic [ref=e561]: Full-Time Permanent
              - cell "Human Resources" [ref=e562]:
                - generic [ref=e563]: Human Resources
              - cell [ref=e564]
              - cell "" [ref=e565]:
                - button "" [ref=e567]:
                  - generic [ref=e568]: 
            - row " 0493 Delpha Abbott  " [ref=e570] [cursor=pointer]:
              - cell "" [ref=e571]:
                - generic [ref=e574]:
                  - checkbox "" [ref=e575]
                  - generic [ref=e577]: 
              - cell "0493" [ref=e578]:
                - generic [ref=e579]: "0493"
              - cell "Delpha" [ref=e580]:
                - generic [ref=e581]: Delpha
              - cell "Abbott" [ref=e582]:
                - generic [ref=e583]: Abbott
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
            - row " 1476 Elton Veum  " [ref=e595] [cursor=pointer]:
              - cell "" [ref=e596]:
                - generic [ref=e599]:
                  - checkbox "" [ref=e600]
                  - generic [ref=e602]: 
              - cell "1476" [ref=e603]:
                - generic [ref=e604]: "1476"
              - cell "Elton" [ref=e605]:
                - generic [ref=e606]: Elton
              - cell "Veum" [ref=e607]:
                - generic [ref=e608]: Veum
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
            - row " 0484 ff ll  " [ref=e620] [cursor=pointer]:
              - cell "" [ref=e621]:
                - generic [ref=e624]:
                  - checkbox "" [ref=e625]
                  - generic [ref=e627]: 
              - cell "0484" [ref=e628]:
                - generic [ref=e629]: "0484"
              - cell "ff" [ref=e630]:
                - generic [ref=e631]: ff
              - cell "ll" [ref=e632]:
                - generic [ref=e633]: ll
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
            - row " 0478 ff ll  " [ref=e645] [cursor=pointer]:
              - cell "" [ref=e646]:
                - generic [ref=e649]:
                  - checkbox "" [ref=e650]
                  - generic [ref=e652]: 
              - cell "0478" [ref=e653]:
                - generic [ref=e654]: "0478"
              - cell "ff" [ref=e655]:
                - generic [ref=e656]: ff
              - cell "ll" [ref=e657]:
                - generic [ref=e658]: ll
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
            - row " 0473 ff ll  " [ref=e670] [cursor=pointer]:
              - cell "" [ref=e671]:
                - generic [ref=e674]:
                  - checkbox "" [ref=e675]
                  - generic [ref=e677]: 
              - cell "0473" [ref=e678]:
                - generic [ref=e679]: "0473"
              - cell "ff" [ref=e680]:
                - generic [ref=e681]: ff
              - cell "ll" [ref=e682]:
                - generic [ref=e683]: ll
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
            - row " 0471 ff ll  " [ref=e695] [cursor=pointer]:
              - cell "" [ref=e696]:
                - generic [ref=e699]:
                  - checkbox "" [ref=e700]
                  - generic [ref=e702]: 
              - cell "0471" [ref=e703]:
                - generic [ref=e704]: "0471"
              - cell "ff" [ref=e705]:
                - generic [ref=e706]: ff
              - cell "ll" [ref=e707]:
                - generic [ref=e708]: ll
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
            - row " 0463 ff ll  " [ref=e720] [cursor=pointer]:
              - cell "" [ref=e721]:
                - generic [ref=e724]:
                  - checkbox "" [ref=e725]
                  - generic [ref=e727]: 
              - cell "0463" [ref=e728]:
                - generic [ref=e729]: "0463"
              - cell "ff" [ref=e730]:
                - generic [ref=e731]: ff
              - cell "ll" [ref=e732]:
                - generic [ref=e733]: ll
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
            - row " 0491 ff ll  " [ref=e745] [cursor=pointer]:
              - cell "" [ref=e746]:
                - generic [ref=e749]:
                  - checkbox "" [ref=e750]
                  - generic [ref=e752]: 
              - cell "0491" [ref=e753]:
                - generic [ref=e754]: "0491"
              - cell "ff" [ref=e755]:
                - generic [ref=e756]: ff
              - cell "ll" [ref=e757]:
                - generic [ref=e758]: ll
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
            - row " 1780046705 firstName lastName  " [ref=e770] [cursor=pointer]:
              - cell "" [ref=e771]:
                - generic [ref=e774]:
                  - checkbox "" [ref=e775]
                  - generic [ref=e777]: 
              - cell "1780046705" [ref=e778]:
                - generic [ref=e779]: "1780046705"
              - cell "firstName" [ref=e780]:
                - generic [ref=e781]: firstName
              - cell "lastName" [ref=e782]:
                - generic [ref=e783]: lastName
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
            - row " 1780046022 firstName middleName lastName Software Engineer Full-Time Contract  " [ref=e795] [cursor=pointer]:
              - cell "" [ref=e796]:
                - generic [ref=e799]:
                  - checkbox "" [ref=e800]
                  - generic [ref=e802]: 
              - cell "1780046022" [ref=e803]:
                - generic [ref=e804]: "1780046022"
              - cell "firstName middleName" [ref=e805]:
                - generic [ref=e806]: firstName middleName
              - cell "lastName" [ref=e807]:
                - generic [ref=e808]: lastName
              - cell "Software Engineer" [ref=e809]:
                - generic [ref=e810]: Software Engineer
              - cell "Full-Time Contract" [ref=e811]:
                - generic [ref=e812]: Full-Time Contract
              - cell [ref=e813]
              - cell [ref=e814]
              - cell " " [ref=e815]:
                - generic [ref=e816]:
                  - button "" [ref=e817]:
                    - generic [ref=e818]: 
                  - button "" [ref=e819]:
                    - generic [ref=e820]: 
            - row " 1780045644 firstName lastName  " [ref=e822] [cursor=pointer]:
              - cell "" [ref=e823]:
                - generic [ref=e826]:
                  - checkbox "" [ref=e827]
                  - generic [ref=e829]: 
              - cell "1780045644" [ref=e830]:
                - generic [ref=e831]: "1780045644"
              - cell "firstName" [ref=e832]:
                - generic [ref=e833]: firstName
              - cell "lastName" [ref=e834]:
                - generic [ref=e835]: lastName
              - cell [ref=e836]
              - cell [ref=e837]
              - cell [ref=e838]
              - cell [ref=e839]
              - cell " " [ref=e840]:
                - generic [ref=e841]:
                  - button "" [ref=e842]:
                    - generic [ref=e843]: 
                  - button "" [ref=e844]:
                    - generic [ref=e845]: 
            - row " 0488 John A. Doe  " [ref=e847] [cursor=pointer]:
              - cell "" [ref=e848]:
                - generic [ref=e851]:
                  - checkbox "" [ref=e852]
                  - generic [ref=e854]: 
              - cell "0488" [ref=e855]:
                - generic [ref=e856]: "0488"
              - cell "John A." [ref=e857]:
                - generic [ref=e858]: John A.
              - cell "Doe" [ref=e859]:
                - generic [ref=e860]: Doe
              - cell [ref=e861]
              - cell [ref=e862]
              - cell [ref=e863]
              - cell [ref=e864]
              - cell " " [ref=e865]:
                - generic [ref=e866]:
                  - button "" [ref=e867]:
                    - generic [ref=e868]: 
                  - button "" [ref=e869]:
                    - generic [ref=e870]: 
            - row " 8975 Lindsay O'Kon-McLaughlin  " [ref=e872] [cursor=pointer]:
              - cell "" [ref=e873]:
                - generic [ref=e876]:
                  - checkbox "" [ref=e877]
                  - generic [ref=e879]: 
              - cell "8975" [ref=e880]:
                - generic [ref=e881]: "8975"
              - cell "Lindsay" [ref=e882]:
                - generic [ref=e883]: Lindsay
              - cell "O'Kon-McLaughlin" [ref=e884]:
                - generic [ref=e885]: O'Kon-McLaughlin
              - cell [ref=e886]
              - cell [ref=e887]
              - cell [ref=e888]
              - cell [ref=e889]
              - cell " " [ref=e890]:
                - generic [ref=e891]:
                  - button "" [ref=e892]:
                    - generic [ref=e893]: 
                  - button "" [ref=e894]:
                    - generic [ref=e895]: 
            - row " 0467 LION KING KING  " [ref=e897] [cursor=pointer]:
              - cell "" [ref=e898]:
                - generic [ref=e901]:
                  - checkbox "" [ref=e902]
                  - generic [ref=e904]: 
              - cell "0467" [ref=e905]:
                - generic [ref=e906]: "0467"
              - cell "LION KING" [ref=e907]:
                - generic [ref=e908]: LION KING
              - cell "KING" [ref=e909]:
                - generic [ref=e910]: KING
              - cell [ref=e911]
              - cell [ref=e912]
              - cell [ref=e913]
              - cell [ref=e914]
              - cell " " [ref=e915]:
                - generic [ref=e916]:
                  - button "" [ref=e917]:
                    - generic [ref=e918]: 
                  - button "" [ref=e919]:
                    - generic [ref=e920]: 
            - row " 9736 Obie Dickens  " [ref=e922] [cursor=pointer]:
              - cell "" [ref=e923]:
                - generic [ref=e926]:
                  - checkbox "" [ref=e927]
                  - generic [ref=e929]: 
              - cell "9736" [ref=e930]:
                - generic [ref=e931]: "9736"
              - cell "Obie" [ref=e932]:
                - generic [ref=e933]: Obie
              - cell "Dickens" [ref=e934]:
                - generic [ref=e935]: Dickens
              - cell [ref=e936]
              - cell [ref=e937]
              - cell [ref=e938]
              - cell [ref=e939]
              - cell " " [ref=e940]:
                - generic [ref=e941]:
                  - button "" [ref=e942]:
                    - generic [ref=e943]: 
                  - button "" [ref=e944]:
                    - generic [ref=e945]: 
            - row " 0470 Playwright Agent  " [ref=e947] [cursor=pointer]:
              - cell "" [ref=e948]:
                - generic [ref=e951]:
                  - checkbox "" [ref=e952]
                  - generic [ref=e954]: 
              - cell "0470" [ref=e955]:
                - generic [ref=e956]: "0470"
              - cell "Playwright" [ref=e957]:
                - generic [ref=e958]: Playwright
              - cell "Agent" [ref=e959]:
                - generic [ref=e960]: Agent
              - cell [ref=e961]
              - cell [ref=e962]
              - cell [ref=e963]
              - cell [ref=e964]
              - cell " " [ref=e965]:
                - generic [ref=e966]:
                  - button "" [ref=e967]:
                    - generic [ref=e968]: 
                  - button "" [ref=e969]:
                    - generic [ref=e970]: 
            - row " 0009 Rishika Sairi QA Engineer Full-Time Permanent Engineering  " [ref=e972] [cursor=pointer]:
              - cell "" [ref=e973]:
                - generic [ref=e976]:
                  - checkbox "" [ref=e977]
                  - generic [ref=e979]: 
              - cell "0009" [ref=e980]:
                - generic [ref=e981]: "0009"
              - cell "Rishika" [ref=e982]:
                - generic [ref=e983]: Rishika
              - cell "Sairi" [ref=e984]:
                - generic [ref=e985]: Sairi
              - cell "QA Engineer" [ref=e986]:
                - generic [ref=e987]: QA Engineer
              - cell "Full-Time Permanent" [ref=e988]:
                - generic [ref=e989]: Full-Time Permanent
              - cell "Engineering" [ref=e990]:
                - generic [ref=e991]: Engineering
              - cell [ref=e992]
              - cell " " [ref=e993]:
                - generic [ref=e994]:
                  - button "" [ref=e995]:
                    - generic [ref=e996]: 
                  - button "" [ref=e997]:
                    - generic [ref=e998]: 
            - row " 0492 Roman Lubowitz  " [ref=e1000] [cursor=pointer]:
              - cell "" [ref=e1001]:
                - generic [ref=e1004]:
                  - checkbox "" [ref=e1005]
                  - generic [ref=e1007]: 
              - cell "0492" [ref=e1008]:
                - generic [ref=e1009]: "0492"
              - cell "Roman" [ref=e1010]:
                - generic [ref=e1011]: Roman
              - cell "Lubowitz" [ref=e1012]:
                - generic [ref=e1013]: Lubowitz
              - cell [ref=e1014]
              - cell [ref=e1015]
              - cell [ref=e1016]
              - cell [ref=e1017]
              - cell " " [ref=e1018]:
                - generic [ref=e1019]:
                  - button "" [ref=e1020]:
                    - generic [ref=e1021]: 
                  - button "" [ref=e1022]:
                    - generic [ref=e1023]: 
            - row " 0481 Test Last  " [ref=e1025] [cursor=pointer]:
              - cell "" [ref=e1026]:
                - generic [ref=e1029]:
                  - checkbox "" [ref=e1030]
                  - generic [ref=e1032]: 
              - cell "0481" [ref=e1033]:
                - generic [ref=e1034]: "0481"
              - cell "Test" [ref=e1035]:
                - generic [ref=e1036]: Test
              - cell "Last" [ref=e1037]:
                - generic [ref=e1038]: Last
              - cell [ref=e1039]
              - cell [ref=e1040]
              - cell [ref=e1041]
              - cell [ref=e1042]
              - cell " " [ref=e1043]:
                - generic [ref=e1044]:
                  - button "" [ref=e1045]:
                    - generic [ref=e1046]: 
                  - button "" [ref=e1047]:
                    - generic [ref=e1048]: 
            - row " 0487 Test Last  " [ref=e1050] [cursor=pointer]:
              - cell "" [ref=e1051]:
                - generic [ref=e1054]:
                  - checkbox "" [ref=e1055]
                  - generic [ref=e1057]: 
              - cell "0487" [ref=e1058]:
                - generic [ref=e1059]: "0487"
              - cell "Test" [ref=e1060]:
                - generic [ref=e1061]: Test
              - cell "Last" [ref=e1062]:
                - generic [ref=e1063]: Last
              - cell [ref=e1064]
              - cell [ref=e1065]
              - cell [ref=e1066]
              - cell [ref=e1067]
              - cell " " [ref=e1068]:
                - generic [ref=e1069]:
                  - button "" [ref=e1070]:
                    - generic [ref=e1071]: 
                  - button "" [ref=e1072]:
                    - generic [ref=e1073]: 
            - row " 0477 Test1780046224529 User1780046224529  " [ref=e1075] [cursor=pointer]:
              - cell "" [ref=e1076]:
                - generic [ref=e1079]:
                  - checkbox "" [ref=e1080]
                  - generic [ref=e1082]: 
              - cell "0477" [ref=e1083]:
                - generic [ref=e1084]: "0477"
              - cell "Test1780046224529" [ref=e1085]:
                - generic [ref=e1086]: Test1780046224529
              - cell "User1780046224529" [ref=e1087]:
                - generic [ref=e1088]: User1780046224529
              - cell [ref=e1089]
              - cell [ref=e1090]
              - cell [ref=e1091]
              - cell [ref=e1092]
              - cell " " [ref=e1093]:
                - generic [ref=e1094]:
                  - button "" [ref=e1095]:
                    - generic [ref=e1096]: 
                  - button "" [ref=e1097]:
                    - generic [ref=e1098]: 
            - row " 0987 Tester Kutta Monae  " [ref=e1100] [cursor=pointer]:
              - cell "" [ref=e1101]:
                - generic [ref=e1104]:
                  - checkbox "" [ref=e1105]
                  - generic [ref=e1107]: 
              - cell "0987" [ref=e1108]:
                - generic [ref=e1109]: "0987"
              - cell "Tester Kutta" [ref=e1110]:
                - generic [ref=e1111]: Tester Kutta
              - cell "Monae" [ref=e1112]:
                - generic [ref=e1113]: Monae
              - cell [ref=e1114]
              - cell [ref=e1115]
              - cell [ref=e1116]
              - cell [ref=e1117]
              - cell " " [ref=e1118]:
                - generic [ref=e1119]:
                  - button "" [ref=e1120]:
                    - generic [ref=e1121]: 
                  - button "" [ref=e1122]:
                    - generic [ref=e1123]: 
            - row " 0311 yqlluQZYFR yaTQBtZgLf  " [ref=e1125] [cursor=pointer]:
              - cell "" [ref=e1126]:
                - generic [ref=e1129]:
                  - checkbox "" [ref=e1130]
                  - generic [ref=e1132]: 
              - cell "0311" [ref=e1133]:
                - generic [ref=e1134]: "0311"
              - cell "yqlluQZYFR" [ref=e1135]:
                - generic [ref=e1136]: yqlluQZYFR
              - cell "yaTQBtZgLf" [ref=e1137]:
                - generic [ref=e1138]: yaTQBtZgLf
              - cell [ref=e1139]
              - cell [ref=e1140]
              - cell [ref=e1141]
              - cell [ref=e1142]
              - cell " " [ref=e1143]:
                - generic [ref=e1144]:
                  - button "" [ref=e1145]:
                    - generic [ref=e1146]: 
                  - button "" [ref=e1147]:
                    - generic [ref=e1148]: 
            - row " 0259 zlnudvgazrzlnudvgazr smzocpbvswsmzocpbvsw  " [ref=e1150] [cursor=pointer]:
              - cell "" [ref=e1151]:
                - generic [ref=e1154]:
                  - checkbox "" [ref=e1155]
                  - generic [ref=e1157]: 
              - cell "0259" [ref=e1158]:
                - generic [ref=e1159]: "0259"
              - cell "zlnudvgazrzlnudvgazr" [ref=e1160]:
                - generic [ref=e1161]: zlnudvgazrzlnudvgazr
              - cell "smzocpbvswsmzocpbvsw" [ref=e1162]:
                - generic [ref=e1163]: smzocpbvswsmzocpbvsw
              - cell [ref=e1164]
              - cell [ref=e1165]
              - cell [ref=e1166]
              - cell [ref=e1167]
              - cell " " [ref=e1168]:
                - generic [ref=e1169]:
                  - button "" [ref=e1170]:
                    - generic [ref=e1171]: 
                  - button "" [ref=e1172]:
                    - generic [ref=e1173]: 
    - generic [ref=e1175]:
      - paragraph [ref=e1176]: OrangeHRM OS 5.8
      - paragraph [ref=e1177]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e1178] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  126 |     await this.employeeNameSearch.fill(employeeName);
  127 |     await this.searchButton.click();
  128 |   }
  129 |   
  130 |   async verifyEmployeeInTable(employeeName) {
  131 |     await this.employeeTableRows
  132 |     .first()
  133 |     .waitFor({
  134 |       state: 'visible',
  135 |       timeout: 30000
  136 |     });
  137 |     const rows =
  138 |       await this.employeeTableRows
  139 |         .allTextContents();
  140 |     const employeeFound =
  141 |       rows.some(row =>
  142 |         row.includes(employeeName)
  143 |       );
  144 |     expect(employeeFound).toBeTruthy();
  145 |   }
  146 | 
  147 |   async getEmployeeCount() {
  148 |     await this.employeeTableRows.first().waitFor();
  149 |     return await this.employeeTableRows.count();
  150 |   }
  151 | 
  152 |   async navigateToMyInfo() {
  153 |     await this.myInfoMenu.click();
  154 |   }
  155 | 
  156 |   async uploadProfileImage(filePath) {
  157 |     await this.profileImage.setInputFiles(
  158 |       filePath
  159 |     );
  160 |     await this.profileImageSaveButton.click();
  161 |   }
  162 | 
  163 |   async verifyProfileImageUploaded() {
  164 | 
  165 |   await expect(
  166 |     this.page.getByText(
  167 |         'Successfully Updated'
  168 |       )
  169 |     ).toBeVisible({
  170 |       timeout: 10000
  171 |     });
  172 |   }
  173 | 
  174 |   async editEmployee() {
  175 | 
  176 |     await this.firstEmployeeEditButton.click();
  177 | 
  178 |     await this.personalDetailsHeader
  179 |       .waitFor({
  180 |         state: 'visible'
  181 |       });
  182 | 
  183 |     await this.middleNameInput.fill(
  184 |       'Updated'
  185 |     );
  186 | 
  187 |     await this.personalSaveButton.click();
  188 | 
  189 |     await expect(
  190 |       this.successUpdateToast
  191 |     ).toBeVisible({
  192 |       timeout: 10000
  193 |     });
  194 |   }
  195 | 
  196 |   async deleteEmployee() {
  197 | 
  198 |     await this.firstEmployeeDeleteButton
  199 |       .click();
  200 | 
  201 |     await this.confirmDeleteButton
  202 |       .click();
  203 | 
  204 |     await expect(
  205 |       this.deleteSuccessToast
  206 |     ).toBeVisible({
  207 |       timeout: 10000
  208 |     });
  209 |   }
  210 | 
  211 |   async getFirstEmployeeId() {
  212 | 
  213 |     await this.employeeTableRows.first().waitFor();
  214 | 
  215 |     const firstRow =
  216 |       await this.employeeTableRows.first().textContent();
  217 | 
  218 |     const employeeId =
  219 |       firstRow.match(/\d+/)?.[0];
  220 | 
  221 |     return employeeId;
  222 |   }
  223 | 
  224 |   async searchEmployeeById(employeeId) {
  225 | 
> 226 |     await this.employeeIdSearch.fill(
      |                                 ^ TimeoutError: locator.fill: Timeout 10000ms exceeded.
  227 |       employeeId
  228 |     );
  229 | 
  230 |     await this.searchButton.click();
  231 |   }
  232 | 
  233 |   async verifyEmployeeIdSearch(employeeId) {
  234 | 
  235 |     await this.employeeTableRows.first().waitFor({
  236 |       state: 'visible'
  237 |     });
  238 | 
  239 |     const tableText =
  240 |       await this.employeeTableRows.first()
  241 |         .textContent();
  242 | 
  243 |     expect(tableText)
  244 |       .toContain(employeeId);
  245 |   }
  246 | 
  247 |   async resetEmployeeSearch() {
  248 | 
  249 |     await this.employeeNameSearch.fill(
  250 |       'Test Employee'
  251 |     );
  252 | 
  253 |     await this.resetButton.click();
  254 | 
  255 |     await expect(
  256 |       this.employeeNameSearch
  257 |     ).toHaveValue('');
  258 |   }
  259 | 
  260 |   async cancelAddEmployee() {
  261 | 
  262 |   }
  263 | }
  264 | 
  265 | module.exports = { PIMPage };
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual\dashboardVisual.spec.js >> Visual Regression Tests >> PIM Page Visual Validation
- Location: tests\visual\dashboardVisual.spec.js:67:3

# Error details

```
Error: expect(page).toHaveScreenshot(expected) failed

  Expected an image 1280px by 3460px, received 1280px by 720px. 

  Snapshot: pim-page.png

Call log:
  - Expect "toHaveScreenshot(pim-page.png)" with timeout 5000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - Expected an image 1280px by 3460px, received 1280px by 720px.
  - waiting 100ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - captured a stable screenshot
  - Expected an image 1280px by 3460px, received 1280px by 720px.

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
              - paragraph [ref=e127]: Leon Kennedy
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
          - generic [ref=e233]: (156) Records Found
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
            - row " 0435 Aalim Nadaf  " [ref=e268] [cursor=pointer]:
              - cell "" [ref=e269]:
                - generic [ref=e272]:
                  - checkbox "" [ref=e273]
                  - generic [ref=e275]: 
              - cell "0435" [ref=e276]:
                - generic [ref=e277]: "0435"
              - cell "Aalim" [ref=e278]:
                - generic [ref=e279]: Aalim
              - cell "Nadaf" [ref=e280]:
                - generic [ref=e281]: Nadaf
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
            - row " 04511 Abhi1 Work  " [ref=e293] [cursor=pointer]:
              - cell "" [ref=e294]:
                - generic [ref=e297]:
                  - checkbox "" [ref=e298]
                  - generic [ref=e300]: 
              - cell "04511" [ref=e301]:
                - generic [ref=e302]: "04511"
              - cell "Abhi1" [ref=e303]:
                - generic [ref=e304]: Abhi1
              - cell "Work" [ref=e305]:
                - generic [ref=e306]: Work
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
            - row " 0416 AI Tester  " [ref=e318] [cursor=pointer]:
              - cell "" [ref=e319]:
                - generic [ref=e322]:
                  - checkbox "" [ref=e323]
                  - generic [ref=e325]: 
              - cell "0416" [ref=e326]:
                - generic [ref=e327]: "0416"
              - cell "AI" [ref=e328]:
                - generic [ref=e329]: AI
              - cell "Tester" [ref=e330]:
                - generic [ref=e331]: Tester
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
            - row " 0383 AI Tester  " [ref=e343] [cursor=pointer]:
              - cell "" [ref=e344]:
                - generic [ref=e347]:
                  - checkbox "" [ref=e348]
                  - generic [ref=e350]: 
              - cell "0383" [ref=e351]:
                - generic [ref=e352]: "0383"
              - cell "AI" [ref=e353]:
                - generic [ref=e354]: AI
              - cell "Tester" [ref=e355]:
                - generic [ref=e356]: Tester
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
            - row " 0442 AI Tester  " [ref=e368] [cursor=pointer]:
              - cell "" [ref=e369]:
                - generic [ref=e372]:
                  - checkbox "" [ref=e373]
                  - generic [ref=e375]: 
              - cell "0442" [ref=e376]:
                - generic [ref=e377]: "0442"
              - cell "AI" [ref=e378]:
                - generic [ref=e379]: AI
              - cell "Tester" [ref=e380]:
                - generic [ref=e381]: Tester
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
            - row " 163 aniket Ashok patil  " [ref=e393] [cursor=pointer]:
              - cell "" [ref=e394]:
                - generic [ref=e397]:
                  - checkbox "" [ref=e398]
                  - generic [ref=e400]: 
              - cell "163" [ref=e401]:
                - generic [ref=e402]: "163"
              - cell "aniket Ashok" [ref=e403]:
                - generic [ref=e404]: aniket Ashok
              - cell "patil" [ref=e405]:
                - generic [ref=e406]: patil
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
            - row " 0360 aniket t t  " [ref=e418] [cursor=pointer]:
              - cell "" [ref=e419]:
                - generic [ref=e422]:
                  - checkbox "" [ref=e423]
                  - generic [ref=e425]: 
              - cell "0360" [ref=e426]:
                - generic [ref=e427]: "0360"
              - cell "aniket t" [ref=e428]:
                - generic [ref=e429]: aniket t
              - cell "t" [ref=e430]:
                - generic [ref=e431]: t
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
            - row " 0303 bala kumar ravi  " [ref=e443] [cursor=pointer]:
              - cell "" [ref=e444]:
                - generic [ref=e447]:
                  - checkbox "" [ref=e448]
                  - generic [ref=e450]: 
              - cell "0303" [ref=e451]:
                - generic [ref=e452]: "0303"
              - cell "bala kumar" [ref=e453]:
                - generic [ref=e454]: bala kumar
              - cell "ravi" [ref=e455]:
                - generic [ref=e456]: ravi
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
            - row " 0292 bmrtahvwhibmrtahvwhi hbfqkhjfqbhbfqkhjfqb  " [ref=e468] [cursor=pointer]:
              - cell "" [ref=e469]:
                - generic [ref=e472]:
                  - checkbox "" [ref=e473]
                  - generic [ref=e475]: 
              - cell "0292" [ref=e476]:
                - generic [ref=e477]: "0292"
              - cell "bmrtahvwhibmrtahvwhi" [ref=e478]:
                - generic [ref=e479]: bmrtahvwhibmrtahvwhi
              - cell "hbfqkhjfqbhbfqkhjfqb" [ref=e480]:
                - generic [ref=e481]: hbfqkhjfqbhbfqkhjfqb
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
            - row " 9880 Brooke Jason Mckenzie  " [ref=e493] [cursor=pointer]:
              - cell "" [ref=e494]:
                - generic [ref=e497]:
                  - checkbox "" [ref=e498]
                  - generic [ref=e500]: 
              - cell "9880" [ref=e501]:
                - generic [ref=e502]: "9880"
              - cell "Brooke Jason" [ref=e503]:
                - generic [ref=e504]: Brooke Jason
              - cell "Mckenzie" [ref=e505]:
                - generic [ref=e506]: Mckenzie
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
            - row " 0450 Carlos Schoen  " [ref=e518] [cursor=pointer]:
              - cell "" [ref=e519]:
                - generic [ref=e522]:
                  - checkbox "" [ref=e523]
                  - generic [ref=e525]: 
              - cell "0450" [ref=e526]:
                - generic [ref=e527]: "0450"
              - cell "Carlos" [ref=e528]:
                - generic [ref=e529]: Carlos
              - cell "Schoen" [ref=e530]:
                - generic [ref=e531]: Schoen
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
            - row " 0437 Carroll Greenfelder  " [ref=e543] [cursor=pointer]:
              - cell "" [ref=e544]:
                - generic [ref=e547]:
                  - checkbox "" [ref=e548]
                  - generic [ref=e550]: 
              - cell "0437" [ref=e551]:
                - generic [ref=e552]: "0437"
              - cell "Carroll" [ref=e553]:
                - generic [ref=e554]: Carroll
              - cell "Greenfelder" [ref=e555]:
                - generic [ref=e556]: Greenfelder
              - cell [ref=e557]
              - cell [ref=e558]
              - cell [ref=e559]
              - cell [ref=e560]
              - cell " " [ref=e561]:
                - generic [ref=e562]:
                  - button "" [ref=e563]:
                    - generic [ref=e564]: 
                  - button "" [ref=e565]:
                    - generic [ref=e566]: 
            - row " 0320 Charles Carter  " [ref=e568] [cursor=pointer]:
              - cell "" [ref=e569]:
                - generic [ref=e572]:
                  - checkbox "" [ref=e573]
                  - generic [ref=e575]: 
              - cell "0320" [ref=e576]:
                - generic [ref=e577]: "0320"
              - cell "Charles" [ref=e578]:
                - generic [ref=e579]: Charles
              - cell "Carter" [ref=e580]:
                - generic [ref=e581]: Carter
              - cell [ref=e582]
              - cell [ref=e583]
              - cell [ref=e584]
              - cell [ref=e585]
              - cell " " [ref=e586]:
                - generic [ref=e587]:
                  - button "" [ref=e588]:
                    - generic [ref=e589]: 
                  - button "" [ref=e590]:
                    - generic [ref=e591]: 
            - row " 00392 Charlotte Smith  " [ref=e593] [cursor=pointer]:
              - cell "" [ref=e594]:
                - generic [ref=e597]:
                  - checkbox "" [ref=e598]
                  - generic [ref=e600]: 
              - cell "00392" [ref=e601]:
                - generic [ref=e602]: "00392"
              - cell "Charlotte" [ref=e603]:
                - generic [ref=e604]: Charlotte
              - cell "Smith" [ref=e605]:
                - generic [ref=e606]: Smith
              - cell [ref=e607]
              - cell [ref=e608]
              - cell [ref=e609]
              - cell [ref=e610]
              - cell " " [ref=e611]:
                - generic [ref=e612]:
                  - button "" [ref=e613]:
                    - generic [ref=e614]: 
                  - button "" [ref=e615]:
                    - generic [ref=e616]: 
            - row " 0363 Christopher Mcmillan  " [ref=e618] [cursor=pointer]:
              - cell "" [ref=e619]:
                - generic [ref=e622]:
                  - checkbox "" [ref=e623]
                  - generic [ref=e625]: 
              - cell "0363" [ref=e626]:
                - generic [ref=e627]: "0363"
              - cell "Christopher" [ref=e628]:
                - generic [ref=e629]: Christopher
              - cell "Mcmillan" [ref=e630]:
                - generic [ref=e631]: Mcmillan
              - cell [ref=e632]
              - cell [ref=e633]
              - cell [ref=e634]
              - cell [ref=e635]
              - cell " " [ref=e636]:
                - generic [ref=e637]:
                  - button "" [ref=e638]:
                    - generic [ref=e639]: 
                  - button "" [ref=e640]:
                    - generic [ref=e641]: 
            - row " 0408 DeletePIM1780122548620 Test  " [ref=e643] [cursor=pointer]:
              - cell "" [ref=e644]:
                - generic [ref=e647]:
                  - checkbox "" [ref=e648]
                  - generic [ref=e650]: 
              - cell "0408" [ref=e651]:
                - generic [ref=e652]: "0408"
              - cell "DeletePIM1780122548620" [ref=e653]:
                - generic [ref=e654]: DeletePIM1780122548620
              - cell "Test" [ref=e655]:
                - generic [ref=e656]: Test
              - cell [ref=e657]
              - cell [ref=e658]
              - cell [ref=e659]
              - cell [ref=e660]
              - cell " " [ref=e661]:
                - generic [ref=e662]:
                  - button "" [ref=e663]:
                    - generic [ref=e664]: 
                  - button "" [ref=e665]:
                    - generic [ref=e666]: 
            - row " 0415 Delores Brakus  " [ref=e668] [cursor=pointer]:
              - cell "" [ref=e669]:
                - generic [ref=e672]:
                  - checkbox "" [ref=e673]
                  - generic [ref=e675]: 
              - cell "0415" [ref=e676]:
                - generic [ref=e677]: "0415"
              - cell "Delores" [ref=e678]:
                - generic [ref=e679]: Delores
              - cell "Brakus" [ref=e680]:
                - generic [ref=e681]: Brakus
              - cell [ref=e682]
              - cell [ref=e683]
              - cell [ref=e684]
              - cell [ref=e685]
              - cell " " [ref=e686]:
                - generic [ref=e687]:
                  - button "" [ref=e688]:
                    - generic [ref=e689]: 
                  - button "" [ref=e690]:
                    - generic [ref=e691]: 
            - row " 0290 dhbrukkuzldhbrukkuzl ibuvlwtfsfibuvlwtfsf  " [ref=e693] [cursor=pointer]:
              - cell "" [ref=e694]:
                - generic [ref=e697]:
                  - checkbox "" [ref=e698]
                  - generic [ref=e700]: 
              - cell "0290" [ref=e701]:
                - generic [ref=e702]: "0290"
              - cell "dhbrukkuzldhbrukkuzl" [ref=e703]:
                - generic [ref=e704]: dhbrukkuzldhbrukkuzl
              - cell "ibuvlwtfsfibuvlwtfsf" [ref=e705]:
                - generic [ref=e706]: ibuvlwtfsfibuvlwtfsf
              - cell [ref=e707]
              - cell [ref=e708]
              - cell [ref=e709]
              - cell [ref=e710]
              - cell " " [ref=e711]:
                - generic [ref=e712]:
                  - button "" [ref=e713]:
                    - generic [ref=e714]: 
                  - button "" [ref=e715]:
                    - generic [ref=e716]: 
            - row " 0294 DHINA KARAN P  " [ref=e718] [cursor=pointer]:
              - cell "" [ref=e719]:
                - generic [ref=e722]:
                  - checkbox "" [ref=e723]
                  - generic [ref=e725]: 
              - cell "0294" [ref=e726]:
                - generic [ref=e727]: "0294"
              - cell "DHINA KARAN" [ref=e728]:
                - generic [ref=e729]: DHINA KARAN
              - cell "P" [ref=e730]:
                - generic [ref=e731]: P
              - cell [ref=e732]
              - cell [ref=e733]
              - cell [ref=e734]
              - cell [ref=e735]
              - cell " " [ref=e736]:
                - generic [ref=e737]:
                  - button "" [ref=e738]:
                    - generic [ref=e739]: 
                  - button "" [ref=e740]:
                    - generic [ref=e741]: 
            - row " 0451 Doug Denesik  " [ref=e743] [cursor=pointer]:
              - cell "" [ref=e744]:
                - generic [ref=e747]:
                  - checkbox "" [ref=e748]
                  - generic [ref=e750]: 
              - cell "0451" [ref=e751]:
                - generic [ref=e752]: "0451"
              - cell "Doug" [ref=e753]:
                - generic [ref=e754]: Doug
              - cell "Denesik" [ref=e755]:
                - generic [ref=e756]: Denesik
              - cell [ref=e757]
              - cell [ref=e758]
              - cell [ref=e759]
              - cell [ref=e760]
              - cell " " [ref=e761]:
                - generic [ref=e762]:
                  - button "" [ref=e763]:
                    - generic [ref=e764]: 
                  - button "" [ref=e765]:
                    - generic [ref=e766]: 
            - row " 0393 Elmer Jakubowski  " [ref=e768] [cursor=pointer]:
              - cell "" [ref=e769]:
                - generic [ref=e772]:
                  - checkbox "" [ref=e773]
                  - generic [ref=e775]: 
              - cell "0393" [ref=e776]:
                - generic [ref=e777]: "0393"
              - cell "Elmer" [ref=e778]:
                - generic [ref=e779]: Elmer
              - cell "Jakubowski" [ref=e780]:
                - generic [ref=e781]: Jakubowski
              - cell [ref=e782]
              - cell [ref=e783]
              - cell [ref=e784]
              - cell [ref=e785]
              - cell " " [ref=e786]:
                - generic [ref=e787]:
                  - button "" [ref=e788]:
                    - generic [ref=e789]: 
                  - button "" [ref=e790]:
                    - generic [ref=e791]: 
            - row " 09557 Emily Jones  " [ref=e793] [cursor=pointer]:
              - cell "" [ref=e794]:
                - generic [ref=e797]:
                  - checkbox "" [ref=e798]
                  - generic [ref=e800]: 
              - cell "09557" [ref=e801]:
                - generic [ref=e802]: "09557"
              - cell "Emily" [ref=e803]:
                - generic [ref=e804]: Emily
              - cell "Jones" [ref=e805]:
                - generic [ref=e806]: Jones
              - cell [ref=e807]
              - cell [ref=e808]
              - cell [ref=e809]
              - cell [ref=e810]
              - cell " " [ref=e811]:
                - generic [ref=e812]:
                  - button "" [ref=e813]:
                    - generic [ref=e814]: 
                  - button "" [ref=e815]:
                    - generic [ref=e816]: 
            - row " 0390 Fannie Sporer  " [ref=e818] [cursor=pointer]:
              - cell "" [ref=e819]:
                - generic [ref=e822]:
                  - checkbox "" [ref=e823]
                  - generic [ref=e825]: 
              - cell "0390" [ref=e826]:
                - generic [ref=e827]: "0390"
              - cell "Fannie" [ref=e828]:
                - generic [ref=e829]: Fannie
              - cell "Sporer" [ref=e830]:
                - generic [ref=e831]: Sporer
              - cell [ref=e832]
              - cell [ref=e833]
              - cell [ref=e834]
              - cell [ref=e835]
              - cell " " [ref=e836]:
                - generic [ref=e837]:
                  - button "" [ref=e838]:
                    - generic [ref=e839]: 
                  - button "" [ref=e840]:
                    - generic [ref=e841]: 
            - row " 0371 ff ll  " [ref=e843] [cursor=pointer]:
              - cell "" [ref=e844]:
                - generic [ref=e847]:
                  - checkbox "" [ref=e848]
                  - generic [ref=e850]: 
              - cell "0371" [ref=e851]:
                - generic [ref=e852]: "0371"
              - cell "ff" [ref=e853]:
                - generic [ref=e854]: ff
              - cell "ll" [ref=e855]:
                - generic [ref=e856]: ll
              - cell [ref=e857]
              - cell [ref=e858]
              - cell [ref=e859]
              - cell [ref=e860]
              - cell " " [ref=e861]:
                - generic [ref=e862]:
                  - button "" [ref=e863]:
                    - generic [ref=e864]: 
                  - button "" [ref=e865]:
                    - generic [ref=e866]: 
            - row " 0380 ff ll  " [ref=e868] [cursor=pointer]:
              - cell "" [ref=e869]:
                - generic [ref=e872]:
                  - checkbox "" [ref=e873]
                  - generic [ref=e875]: 
              - cell "0380" [ref=e876]:
                - generic [ref=e877]: "0380"
              - cell "ff" [ref=e878]:
                - generic [ref=e879]: ff
              - cell "ll" [ref=e880]:
                - generic [ref=e881]: ll
              - cell [ref=e882]
              - cell [ref=e883]
              - cell [ref=e884]
              - cell [ref=e885]
              - cell " " [ref=e886]:
                - generic [ref=e887]:
                  - button "" [ref=e888]:
                    - generic [ref=e889]: 
                  - button "" [ref=e890]:
                    - generic [ref=e891]: 
            - row " 0449 ff ll  " [ref=e893] [cursor=pointer]:
              - cell "" [ref=e894]:
                - generic [ref=e897]:
                  - checkbox "" [ref=e898]
                  - generic [ref=e900]: 
              - cell "0449" [ref=e901]:
                - generic [ref=e902]: "0449"
              - cell "ff" [ref=e903]:
                - generic [ref=e904]: ff
              - cell "ll" [ref=e905]:
                - generic [ref=e906]: ll
              - cell [ref=e907]
              - cell [ref=e908]
              - cell [ref=e909]
              - cell [ref=e910]
              - cell " " [ref=e911]:
                - generic [ref=e912]:
                  - button "" [ref=e913]:
                    - generic [ref=e914]: 
                  - button "" [ref=e915]:
                    - generic [ref=e916]: 
            - row " 0396 ff ll  " [ref=e918] [cursor=pointer]:
              - cell "" [ref=e919]:
                - generic [ref=e922]:
                  - checkbox "" [ref=e923]
                  - generic [ref=e925]: 
              - cell "0396" [ref=e926]:
                - generic [ref=e927]: "0396"
              - cell "ff" [ref=e928]:
                - generic [ref=e929]: ff
              - cell "ll" [ref=e930]:
                - generic [ref=e931]: ll
              - cell [ref=e932]
              - cell [ref=e933]
              - cell [ref=e934]
              - cell [ref=e935]
              - cell " " [ref=e936]:
                - generic [ref=e937]:
                  - button "" [ref=e938]:
                    - generic [ref=e939]: 
                  - button "" [ref=e940]:
                    - generic [ref=e941]: 
            - row " 0439 ff ll  " [ref=e943] [cursor=pointer]:
              - cell "" [ref=e944]:
                - generic [ref=e947]:
                  - checkbox "" [ref=e948]
                  - generic [ref=e950]: 
              - cell "0439" [ref=e951]:
                - generic [ref=e952]: "0439"
              - cell "ff" [ref=e953]:
                - generic [ref=e954]: ff
              - cell "ll" [ref=e955]:
                - generic [ref=e956]: ll
              - cell [ref=e957]
              - cell [ref=e958]
              - cell [ref=e959]
              - cell [ref=e960]
              - cell " " [ref=e961]:
                - generic [ref=e962]:
                  - button "" [ref=e963]:
                    - generic [ref=e964]: 
                  - button "" [ref=e965]:
                    - generic [ref=e966]: 
            - row " 0387 ff ll  " [ref=e968] [cursor=pointer]:
              - cell "" [ref=e969]:
                - generic [ref=e972]:
                  - checkbox "" [ref=e973]
                  - generic [ref=e975]: 
              - cell "0387" [ref=e976]:
                - generic [ref=e977]: "0387"
              - cell "ff" [ref=e978]:
                - generic [ref=e979]: ff
              - cell "ll" [ref=e980]:
                - generic [ref=e981]: ll
              - cell [ref=e982]
              - cell [ref=e983]
              - cell [ref=e984]
              - cell [ref=e985]
              - cell " " [ref=e986]:
                - generic [ref=e987]:
                  - button "" [ref=e988]:
                    - generic [ref=e989]: 
                  - button "" [ref=e990]:
                    - generic [ref=e991]: 
            - row " 0377 ff ll  " [ref=e993] [cursor=pointer]:
              - cell "" [ref=e994]:
                - generic [ref=e997]:
                  - checkbox "" [ref=e998]
                  - generic [ref=e1000]: 
              - cell "0377" [ref=e1001]:
                - generic [ref=e1002]: "0377"
              - cell "ff" [ref=e1003]:
                - generic [ref=e1004]: ff
              - cell "ll" [ref=e1005]:
                - generic [ref=e1006]: ll
              - cell [ref=e1007]
              - cell [ref=e1008]
              - cell [ref=e1009]
              - cell [ref=e1010]
              - cell " " [ref=e1011]:
                - generic [ref=e1012]:
                  - button "" [ref=e1013]:
                    - generic [ref=e1014]: 
                  - button "" [ref=e1015]:
                    - generic [ref=e1016]: 
            - row " 0447 ff ll  " [ref=e1018] [cursor=pointer]:
              - cell "" [ref=e1019]:
                - generic [ref=e1022]:
                  - checkbox "" [ref=e1023]
                  - generic [ref=e1025]: 
              - cell "0447" [ref=e1026]:
                - generic [ref=e1027]: "0447"
              - cell "ff" [ref=e1028]:
                - generic [ref=e1029]: ff
              - cell "ll" [ref=e1030]:
                - generic [ref=e1031]: ll
              - cell [ref=e1032]
              - cell [ref=e1033]
              - cell [ref=e1034]
              - cell [ref=e1035]
              - cell " " [ref=e1036]:
                - generic [ref=e1037]:
                  - button "" [ref=e1038]:
                    - generic [ref=e1039]: 
                  - button "" [ref=e1040]:
                    - generic [ref=e1041]: 
            - row " 0421 ff ll  " [ref=e1043] [cursor=pointer]:
              - cell "" [ref=e1044]:
                - generic [ref=e1047]:
                  - checkbox "" [ref=e1048]
                  - generic [ref=e1050]: 
              - cell "0421" [ref=e1051]:
                - generic [ref=e1052]: "0421"
              - cell "ff" [ref=e1053]:
                - generic [ref=e1054]: ff
              - cell "ll" [ref=e1055]:
                - generic [ref=e1056]: ll
              - cell [ref=e1057]
              - cell [ref=e1058]
              - cell [ref=e1059]
              - cell [ref=e1060]
              - cell " " [ref=e1061]:
                - generic [ref=e1062]:
                  - button "" [ref=e1063]:
                    - generic [ref=e1064]: 
                  - button "" [ref=e1065]:
                    - generic [ref=e1066]: 
            - row " 0428 ff ll  " [ref=e1068] [cursor=pointer]:
              - cell "" [ref=e1069]:
                - generic [ref=e1072]:
                  - checkbox "" [ref=e1073]
                  - generic [ref=e1075]: 
              - cell "0428" [ref=e1076]:
                - generic [ref=e1077]: "0428"
              - cell "ff" [ref=e1078]:
                - generic [ref=e1079]: ff
              - cell "ll" [ref=e1080]:
                - generic [ref=e1081]: ll
              - cell [ref=e1082]
              - cell [ref=e1083]
              - cell [ref=e1084]
              - cell [ref=e1085]
              - cell " " [ref=e1086]:
                - generic [ref=e1087]:
                  - button "" [ref=e1088]:
                    - generic [ref=e1089]: 
                  - button "" [ref=e1090]:
                    - generic [ref=e1091]: 
            - row " 0403 ff ll  " [ref=e1093] [cursor=pointer]:
              - cell "" [ref=e1094]:
                - generic [ref=e1097]:
                  - checkbox "" [ref=e1098]
                  - generic [ref=e1100]: 
              - cell "0403" [ref=e1101]:
                - generic [ref=e1102]: "0403"
              - cell "ff" [ref=e1103]:
                - generic [ref=e1104]: ff
              - cell "ll" [ref=e1105]:
                - generic [ref=e1106]: ll
              - cell [ref=e1107]
              - cell [ref=e1108]
              - cell [ref=e1109]
              - cell [ref=e1110]
              - cell " " [ref=e1111]:
                - generic [ref=e1112]:
                  - button "" [ref=e1113]:
                    - generic [ref=e1114]: 
                  - button "" [ref=e1115]:
                    - generic [ref=e1116]: 
            - row " 0373 ff ll  " [ref=e1118] [cursor=pointer]:
              - cell "" [ref=e1119]:
                - generic [ref=e1122]:
                  - checkbox "" [ref=e1123]
                  - generic [ref=e1125]: 
              - cell "0373" [ref=e1126]:
                - generic [ref=e1127]: "0373"
              - cell "ff" [ref=e1128]:
                - generic [ref=e1129]: ff
              - cell "ll" [ref=e1130]:
                - generic [ref=e1131]: ll
              - cell [ref=e1132]
              - cell [ref=e1133]
              - cell [ref=e1134]
              - cell [ref=e1135]
              - cell " " [ref=e1136]:
                - generic [ref=e1137]:
                  - button "" [ref=e1138]:
                    - generic [ref=e1139]: 
                  - button "" [ref=e1140]:
                    - generic [ref=e1141]: 
            - row " 0443 ff ll  " [ref=e1143] [cursor=pointer]:
              - cell "" [ref=e1144]:
                - generic [ref=e1147]:
                  - checkbox "" [ref=e1148]
                  - generic [ref=e1150]: 
              - cell "0443" [ref=e1151]:
                - generic [ref=e1152]: "0443"
              - cell "ff" [ref=e1153]:
                - generic [ref=e1154]: ff
              - cell "ll" [ref=e1155]:
                - generic [ref=e1156]: ll
              - cell [ref=e1157]
              - cell [ref=e1158]
              - cell [ref=e1159]
              - cell [ref=e1160]
              - cell " " [ref=e1161]:
                - generic [ref=e1162]:
                  - button "" [ref=e1163]:
                    - generic [ref=e1164]: 
                  - button "" [ref=e1165]:
                    - generic [ref=e1166]: 
            - row " 0412 ff ll  " [ref=e1168] [cursor=pointer]:
              - cell "" [ref=e1169]:
                - generic [ref=e1172]:
                  - checkbox "" [ref=e1173]
                  - generic [ref=e1175]: 
              - cell "0412" [ref=e1176]:
                - generic [ref=e1177]: "0412"
              - cell "ff" [ref=e1178]:
                - generic [ref=e1179]: ff
              - cell "ll" [ref=e1180]:
                - generic [ref=e1181]: ll
              - cell [ref=e1182]
              - cell [ref=e1183]
              - cell [ref=e1184]
              - cell [ref=e1185]
              - cell " " [ref=e1186]:
                - generic [ref=e1187]:
                  - button "" [ref=e1188]:
                    - generic [ref=e1189]: 
                  - button "" [ref=e1190]:
                    - generic [ref=e1191]: 
            - row " 0436 Florence Kulas  " [ref=e1193] [cursor=pointer]:
              - cell "" [ref=e1194]:
                - generic [ref=e1197]:
                  - checkbox "" [ref=e1198]
                  - generic [ref=e1200]: 
              - cell "0436" [ref=e1201]:
                - generic [ref=e1202]: "0436"
              - cell "Florence" [ref=e1203]:
                - generic [ref=e1204]: Florence
              - cell "Kulas" [ref=e1205]:
                - generic [ref=e1206]: Kulas
              - cell [ref=e1207]
              - cell [ref=e1208]
              - cell [ref=e1209]
              - cell [ref=e1210]
              - cell " " [ref=e1211]:
                - generic [ref=e1212]:
                  - button "" [ref=e1213]:
                    - generic [ref=e1214]: 
                  - button "" [ref=e1215]:
                    - generic [ref=e1216]: 
            - row " 1235 FName Mname LName  " [ref=e1218] [cursor=pointer]:
              - cell "" [ref=e1219]:
                - generic [ref=e1222]:
                  - checkbox "" [ref=e1223]
                  - generic [ref=e1225]: 
              - cell "1235" [ref=e1226]:
                - generic [ref=e1227]: "1235"
              - cell "FName Mname" [ref=e1228]:
                - generic [ref=e1229]: FName Mname
              - cell "LName" [ref=e1230]:
                - generic [ref=e1231]: LName
              - cell [ref=e1232]
              - cell [ref=e1233]
              - cell [ref=e1234]
              - cell [ref=e1235]
              - cell " " [ref=e1236]:
                - generic [ref=e1237]:
                  - button "" [ref=e1238]:
                    - generic [ref=e1239]: 
                  - button "" [ref=e1240]:
                    - generic [ref=e1241]: 
            - row " 4936 Frank Ryan Gonzalez  " [ref=e1243] [cursor=pointer]:
              - cell "" [ref=e1244]:
                - generic [ref=e1247]:
                  - checkbox "" [ref=e1248]
                  - generic [ref=e1250]: 
              - cell "4936" [ref=e1251]:
                - generic [ref=e1252]: "4936"
              - cell "Frank Ryan" [ref=e1253]:
                - generic [ref=e1254]: Frank Ryan
              - cell "Gonzalez" [ref=e1255]:
                - generic [ref=e1256]: Gonzalez
              - cell [ref=e1257]
              - cell [ref=e1258]
              - cell [ref=e1259]
              - cell [ref=e1260]
              - cell " " [ref=e1261]:
                - generic [ref=e1262]:
                  - button "" [ref=e1263]:
                    - generic [ref=e1264]: 
                  - button "" [ref=e1265]:
                    - generic [ref=e1266]: 
            - row " ATPValue ftdkux ltsxgy  " [ref=e1268] [cursor=pointer]:
              - cell "" [ref=e1269]:
                - generic [ref=e1272]:
                  - checkbox "" [ref=e1273]
                  - generic [ref=e1275]: 
              - cell "ATPValue" [ref=e1276]:
                - generic [ref=e1277]: ATPValue
              - cell "ftdkux" [ref=e1278]:
                - generic [ref=e1279]: ftdkux
              - cell "ltsxgy" [ref=e1280]:
                - generic [ref=e1281]: ltsxgy
              - cell [ref=e1282]
              - cell [ref=e1283]
              - cell [ref=e1284]
              - cell [ref=e1285]
              - cell " " [ref=e1286]:
                - generic [ref=e1287]:
                  - button "" [ref=e1288]:
                    - generic [ref=e1289]: 
                  - button "" [ref=e1290]:
                    - generic [ref=e1291]: 
            - row " ATPValue fthnvn ltwrrt  " [ref=e1293] [cursor=pointer]:
              - cell "" [ref=e1294]:
                - generic [ref=e1297]:
                  - checkbox "" [ref=e1298]
                  - generic [ref=e1300]: 
              - cell "ATPValue" [ref=e1301]:
                - generic [ref=e1302]: ATPValue
              - cell "fthnvn" [ref=e1303]:
                - generic [ref=e1304]: fthnvn
              - cell "ltwrrt" [ref=e1305]:
                - generic [ref=e1306]: ltwrrt
              - cell [ref=e1307]
              - cell [ref=e1308]
              - cell [ref=e1309]
              - cell [ref=e1310]
              - cell " " [ref=e1311]:
                - generic [ref=e1312]:
                  - button "" [ref=e1313]:
                    - generic [ref=e1314]: 
                  - button "" [ref=e1315]:
                    - generic [ref=e1316]: 
            - row " ATPValue fthnvn ltwrrt  " [ref=e1318] [cursor=pointer]:
              - cell "" [ref=e1319]:
                - generic [ref=e1322]:
                  - checkbox "" [ref=e1323]
                  - generic [ref=e1325]: 
              - cell "ATPValue" [ref=e1326]:
                - generic [ref=e1327]: ATPValue
              - cell "fthnvn" [ref=e1328]:
                - generic [ref=e1329]: fthnvn
              - cell "ltwrrt" [ref=e1330]:
                - generic [ref=e1331]: ltwrrt
              - cell [ref=e1332]
              - cell [ref=e1333]
              - cell [ref=e1334]
              - cell [ref=e1335]
              - cell " " [ref=e1336]:
                - generic [ref=e1337]:
                  - button "" [ref=e1338]:
                    - generic [ref=e1339]: 
                  - button "" [ref=e1340]:
                    - generic [ref=e1341]: 
            - row " ATPValue fthyfv ltrhtm  " [ref=e1343] [cursor=pointer]:
              - cell "" [ref=e1344]:
                - generic [ref=e1347]:
                  - checkbox "" [ref=e1348]
                  - generic [ref=e1350]: 
              - cell "ATPValue" [ref=e1351]:
                - generic [ref=e1352]: ATPValue
              - cell "fthyfv" [ref=e1353]:
                - generic [ref=e1354]: fthyfv
              - cell "ltrhtm" [ref=e1355]:
                - generic [ref=e1356]: ltrhtm
              - cell [ref=e1357]
              - cell [ref=e1358]
              - cell [ref=e1359]
              - cell [ref=e1360]
              - cell " " [ref=e1361]:
                - generic [ref=e1362]:
                  - button "" [ref=e1363]:
                    - generic [ref=e1364]: 
                  - button "" [ref=e1365]:
                    - generic [ref=e1366]: 
            - row " ATPValue ftioiu ltpugr  " [ref=e1368] [cursor=pointer]:
              - cell "" [ref=e1369]:
                - generic [ref=e1372]:
                  - checkbox "" [ref=e1373]
                  - generic [ref=e1375]: 
              - cell "ATPValue" [ref=e1376]:
                - generic [ref=e1377]: ATPValue
              - cell "ftioiu" [ref=e1378]:
                - generic [ref=e1379]: ftioiu
              - cell "ltpugr" [ref=e1380]:
                - generic [ref=e1381]: ltpugr
              - cell [ref=e1382]
              - cell [ref=e1383]
              - cell [ref=e1384]
              - cell [ref=e1385]
              - cell " " [ref=e1386]:
                - generic [ref=e1387]:
                  - button "" [ref=e1388]:
                    - generic [ref=e1389]: 
                  - button "" [ref=e1390]:
                    - generic [ref=e1391]: 
            - row " ATPValue ftioiu ltpugr  " [ref=e1393] [cursor=pointer]:
              - cell "" [ref=e1394]:
                - generic [ref=e1397]:
                  - checkbox "" [ref=e1398]
                  - generic [ref=e1400]: 
              - cell "ATPValue" [ref=e1401]:
                - generic [ref=e1402]: ATPValue
              - cell "ftioiu" [ref=e1403]:
                - generic [ref=e1404]: ftioiu
              - cell "ltpugr" [ref=e1405]:
                - generic [ref=e1406]: ltpugr
              - cell [ref=e1407]
              - cell [ref=e1408]
              - cell [ref=e1409]
              - cell [ref=e1410]
              - cell " " [ref=e1411]:
                - generic [ref=e1412]:
                  - button "" [ref=e1413]:
                    - generic [ref=e1414]: 
                  - button "" [ref=e1415]:
                    - generic [ref=e1416]: 
            - row " ATPValue ftioiu ltpugr  " [ref=e1418] [cursor=pointer]:
              - cell "" [ref=e1419]:
                - generic [ref=e1422]:
                  - checkbox "" [ref=e1423]
                  - generic [ref=e1425]: 
              - cell "ATPValue" [ref=e1426]:
                - generic [ref=e1427]: ATPValue
              - cell "ftioiu" [ref=e1428]:
                - generic [ref=e1429]: ftioiu
              - cell "ltpugr" [ref=e1430]:
                - generic [ref=e1431]: ltpugr
              - cell [ref=e1432]
              - cell [ref=e1433]
              - cell [ref=e1434]
              - cell [ref=e1435]
              - cell " " [ref=e1436]:
                - generic [ref=e1437]:
                  - button "" [ref=e1438]:
                    - generic [ref=e1439]: 
                  - button "" [ref=e1440]:
                    - generic [ref=e1441]: 
            - row " ATPValue ftioiu ltpugr  " [ref=e1443] [cursor=pointer]:
              - cell "" [ref=e1444]:
                - generic [ref=e1447]:
                  - checkbox "" [ref=e1448]
                  - generic [ref=e1450]: 
              - cell "ATPValue" [ref=e1451]:
                - generic [ref=e1452]: ATPValue
              - cell "ftioiu" [ref=e1453]:
                - generic [ref=e1454]: ftioiu
              - cell "ltpugr" [ref=e1455]:
                - generic [ref=e1456]: ltpugr
              - cell [ref=e1457]
              - cell [ref=e1458]
              - cell [ref=e1459]
              - cell [ref=e1460]
              - cell " " [ref=e1461]:
                - generic [ref=e1462]:
                  - button "" [ref=e1463]:
                    - generic [ref=e1464]: 
                  - button "" [ref=e1465]:
                    - generic [ref=e1466]: 
            - row " ATPValue ftndlm ltdyyf  " [ref=e1468] [cursor=pointer]:
              - cell "" [ref=e1469]:
                - generic [ref=e1472]:
                  - checkbox "" [ref=e1473]
                  - generic [ref=e1475]: 
              - cell "ATPValue" [ref=e1476]:
                - generic [ref=e1477]: ATPValue
              - cell "ftndlm" [ref=e1478]:
                - generic [ref=e1479]: ftndlm
              - cell "ltdyyf" [ref=e1480]:
                - generic [ref=e1481]: ltdyyf
              - cell [ref=e1482]
              - cell [ref=e1483]
              - cell [ref=e1484]
              - cell [ref=e1485]
              - cell " " [ref=e1486]:
                - generic [ref=e1487]:
                  - button "" [ref=e1488]:
                    - generic [ref=e1489]: 
                  - button "" [ref=e1490]:
                    - generic [ref=e1491]: 
            - row " ATPValue ftpjte ltpzkj  " [ref=e1493] [cursor=pointer]:
              - cell "" [ref=e1494]:
                - generic [ref=e1497]:
                  - checkbox "" [ref=e1498]
                  - generic [ref=e1500]: 
              - cell "ATPValue" [ref=e1501]:
                - generic [ref=e1502]: ATPValue
              - cell "ftpjte" [ref=e1503]:
                - generic [ref=e1504]: ftpjte
              - cell "ltpzkj" [ref=e1505]:
                - generic [ref=e1506]: ltpzkj
              - cell [ref=e1507]
              - cell [ref=e1508]
              - cell [ref=e1509]
              - cell [ref=e1510]
              - cell " " [ref=e1511]:
                - generic [ref=e1512]:
                  - button "" [ref=e1513]:
                    - generic [ref=e1514]: 
                  - button "" [ref=e1515]:
                    - generic [ref=e1516]: 
        - navigation "Pagination Navigation" [ref=e1518]:
          - list [ref=e1519]:
            - listitem [ref=e1520]:
              - button "1" [ref=e1521] [cursor=pointer]
            - listitem [ref=e1522]:
              - button "2" [ref=e1523] [cursor=pointer]
            - listitem [ref=e1524]:
              - button "3" [ref=e1525] [cursor=pointer]
            - listitem [ref=e1526]:
              - button "4" [ref=e1527] [cursor=pointer]
            - listitem [ref=e1528]:
              - button "" [ref=e1529] [cursor=pointer]:
                - generic [ref=e1530]: 
    - generic [ref=e1531]:
      - paragraph [ref=e1532]: OrangeHRM OS 5.8
      - paragraph [ref=e1533]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e1534] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1   | const { test, expect } =
  2   | require('../../fixtures/baseFixtures');
  3   | 
  4   | test.describe.configure({
  5   |   mode: 'serial'
  6   | });
  7   | 
  8   | test.describe(
  9   |   'Visual Regression Tests',
  10  |   () => {
  11  | 
  12  |   test(
  13  |     'Dashboard Visual Validation',
  14  |     async ({
  15  |       page,
  16  |       loginPage,
  17  |       browserName
  18  |     }) => {
  19  | 
  20  |       test.skip(
  21  |         browserName !== 'chromium',
  22  |         'Visual tests only for Chromium'
  23  |       );
  24  | 
  25  |       await loginPage.gotoLoginPage();
  26  | 
  27  |       await loginPage.login();
  28  | 
  29  |       await loginPage.verifySuccessfulLogin();
  30  | 
  31  |       await expect(page).toHaveScreenshot(
  32  |         'dashboard-page.png',
  33  |         {
  34  |           fullPage: true,
  35  |           maxDiffPixelRatio: 0.1,
  36  |         }
  37  |       );
  38  |     }
  39  |   );
  40  | 
  41  |   test(
  42  |     'Login Page Visual Validation',
  43  |     async ({
  44  |       page,
  45  |       browserName
  46  |     }) => {
  47  | 
  48  |       test.skip(
  49  |         browserName !== 'chromium',
  50  |         'Visual tests only for Chromium'
  51  |       );
  52  | 
  53  |       await page.goto(
  54  |         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  55  |       );
  56  | 
  57  |       await expect(page).toHaveScreenshot(
  58  |         'login-page.png',
  59  |         {
  60  |           fullPage: true,
  61  |           maxDiffPixelRatio: 0.1,
  62  |         }
  63  |       );
  64  |     }
  65  |   );
  66  | 
  67  |   test(
  68  |     'PIM Page Visual Validation',
  69  |     async ({
  70  |       page,
  71  |       loginPage,
  72  |       pimPage,
  73  |       browserName
  74  |     }) => {
  75  | 
  76  |       test.skip(
  77  |         browserName !== 'chromium',
  78  |         'Visual tests only for Chromium'
  79  |       );
  80  | 
  81  |       await loginPage.gotoLoginPage();
  82  | 
  83  |       await loginPage.login();
  84  | 
  85  |       await loginPage.verifySuccessfulLogin();
  86  | 
  87  |       await pimPage.navigateToPIM();
  88  | 
> 89  |       await expect(page).toHaveScreenshot(
      |                          ^ Error: expect(page).toHaveScreenshot(expected) failed
  90  |         'pim-page.png',
  91  |         {
  92  |           maxDiffPixelRatio: 0.1,
  93  |         }
  94  |       );
  95  |     }
  96  |   );
  97  | 
  98  |   test(
  99  |     'Admin Page Visual Validation',
  100 |     async ({
  101 |       page,
  102 |       loginPage,
  103 |       adminPage,
  104 |       browserName
  105 |     }) => {
  106 | 
  107 |       test.skip(
  108 |         browserName !== 'chromium',
  109 |         'Visual tests only for Chromium'
  110 |       );
  111 | 
  112 |       await loginPage.gotoLoginPage();
  113 | 
  114 |       await loginPage.login();
  115 | 
  116 |       await loginPage.verifySuccessfulLogin();
  117 | 
  118 |       await adminPage.navigateToAdmin();
  119 | 
  120 |       await expect(page).toHaveScreenshot(
  121 |         'admin-page.png',
  122 |         {
  123 |           maxDiffPixelRatio: 0.1,
  124 |         }
  125 |       );
  126 |     }
  127 |   );
  128 | 
  129 |   test(
  130 |     'Leave Page Visual Validation',
  131 |     async ({
  132 |       page,
  133 |       loginPage,
  134 |       leavePage,
  135 |       browserName
  136 |     }) => {
  137 | 
  138 |       test.skip(
  139 |         browserName !== 'chromium',
  140 |         'Visual tests only for Chromium'
  141 |       );
  142 | 
  143 |       await loginPage.gotoLoginPage();
  144 | 
  145 |       await loginPage.login();
  146 | 
  147 |       await loginPage.verifySuccessfulLogin();
  148 | 
  149 |       await leavePage.navigateToLeave();
  150 | 
  151 |       await expect(page).toHaveScreenshot(
  152 |         'leave-page.png',
  153 |         {
  154 |           maxDiffPixelRatio: 0.1,
  155 |         }
  156 |       );
  157 |     }
  158 |   );
  159 | 
  160 | });
```
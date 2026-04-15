TDLSchoolJuiceShop — Test Scenarios Project

TDLSchoolJuiceShop is a project that contains test scenarios for a web зфпу (Juice Shop - http://juiceshop.tdlbox.com/#/). It focuses on validating authentication and payment flows through simulated user actions.

Description:

The project defines user scenarios that test how the application behaves during login, registration, password recovery, and payment operations.

Test Scenarios:

Authentication:

1) Register with Existing Credentials:
   
    Open application and log out

    Go to login and switch to registration

    Enter email and password

    Fill in security question
    
    Submit registration
    
    Verify error message for non-unique email


3) Forgot Password:
   
    Open application and go to login page
    
    Select "forgot password"
    
    Enter email
    
    Answer security question
    
    Set a new password
    
    Verify success message


3) Payment:
    
    Add New Card
    
    Log in as a new user
    
    Open account and go to payment options
    
    Add a new card
    
    Enter card details (name, number, expiry)
    
    Submit form
    
    Verify that the card is added


Notes:

The project is intended for learning testing and QA basics
Focuses on core user flows and validation
Scenarios simulate real user interactions with the system

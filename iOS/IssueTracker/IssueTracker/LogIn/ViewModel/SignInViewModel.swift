//
//  SignInViewModel.swift
//  IssueTracker
//
//  Created by cho on 2020/10/29.
//  Copyright © 2020 ralph. All rights reserved.
//

import Foundation

class SignInViewModel {
    
    struct Status {
        var idErrorMessage = Bindable<String>("")
        var passwordErrorMessage = Bindable<String>("")
        var buttonEnabled = Bindable((false,false))
    }
    
    struct Action {
        var idTextFieldChanged: (String) -> Void
        var passwordTextFieldChanged: (String) -> Void
    }
    
    var status = Status()
    lazy var action = Action(idTextFieldChanged: self.idValidationChecker, passwordTextFieldChanged: self.passwordValidationChecker)

    var idValidationChecker = IdValidationChecker()
    var passwordValidationChecker = PasswordValidationChecker()
    
    func idValidationChecker(temp:String) {
        self.status.idErrorMessage.value = idValidationChecker.validate(input: temp).rawValue
        self.status.buttonEnabled.value.0 = idValidationChecker.validate(input: temp).rawValue.isEmpty && !temp.isEmpty
    }
    
    func passwordValidationChecker(temp:String) {
        self.status.passwordErrorMessage.value = passwordValidationChecker.validate(input: temp).rawValue
        self.status.buttonEnabled.value.1 = passwordValidationChecker.validate(input: temp).rawValue.isEmpty && !temp.isEmpty
    }

    init() {
        
    }
}

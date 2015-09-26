//
//  ShowAbilityDetailController.swift
//  GameFit
//
//  Created by Pranav Kundra on 9/26/15.
//  Copyright © 2015 Pranav Kundra. All rights reserved.
//

import Foundation
import UIKit

class ShowAbilityDetailController: UIViewController {
    
    @IBOutlet weak var label: UILabel!
    var labelText: String = ""
    
    @IBAction func cancel(sender: UIBarButtonItem) {
        dismissViewControllerAnimated(true, completion: nil)
    }
    
    func load(labelText: String) {
//        self.label.text=labelText
        self.labelText = labelText
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        label.text=labelText
    }
}
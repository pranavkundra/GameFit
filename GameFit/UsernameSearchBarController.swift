//
//  UsernameSearchBar.swift
//  GameFit
//
//  Created by Pranav Kundra on 9/27/15.
//  Copyright © 2015 Pranav Kundra. All rights reserved.
//

import Foundation
import UIKit

class UsernameSearchBarController: UIViewController, UITableViewDataSource, UITableViewDelegate {
    var userNames = ["chinmayrane", "anthonyjenkins", "chaitya", "madmax"]
    var searchResults = []
    
    @IBOutlet weak var usernameTable: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        usernameTable.registerClass(UITableViewCell.self, forCellReuseIdentifier: "UsernameCell")
    }
    
    func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return userNames.count
    }
    
    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        
        let cell = tableView.dequeueReusableCellWithIdentifier("UsernameCell", forIndexPath: indexPath)
        
        cell.textLabel?.text = userNames[indexPath.row]
        
        return cell
    }
    
    
}

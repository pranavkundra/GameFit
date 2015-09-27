//
//  AttackListController.swift
//  GameFit
//
//  Created by Pranav Kundra on 9/26/15.
//  Copyright © 2015 Pranav Kundra. All rights reserved.
//

import Foundation
import UIKit

class AttackListController: UITableViewController {

    let attackList = [ ["Attack1", 135], ["Attack2", 335], ["Attack3", 325], ["Attack4", 355],]
    var chosenAttack = ["Attack", 100]
    
    override func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return attackList.count
    }
    
    override func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        
        let cell = tableView.dequeueReusableCellWithIdentifier("AttackListCell", forIndexPath: indexPath)
        
        cell.textLabel?.text=attackList[indexPath.row][0] as! String + " - Damage " + String(attackList[indexPath.row][1] as! Int)
        return cell
    }
    
    @IBAction func cancel(sender: AnyObject) {
        dismissViewControllerAnimated(true, completion: nil)
    }
    
    override func tableView(tableView: UITableView, didSelectRowAtIndexPath indexPath: NSIndexPath) {
        let cell = tableView.dequeueReusableCellWithIdentifier("AttackListCell", forIndexPath: indexPath)
        
        cell.accessoryType = .Checkmark
        cell.textLabel?.text=attackList[indexPath.row][0] as! String + " - Damage " + String(attackList[indexPath.row][1] as! Int)
        chosenAttack[0]=String(attackList[indexPath.row][0])
        chosenAttack[1]=(attackList[indexPath.row][1]) as! Int
    }
}

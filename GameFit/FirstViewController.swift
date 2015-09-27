//
//  FirstViewController.swift
//  GameFit
//
//  Created by Pranav Kundra on 9/26/15.
//  Copyright © 2015 Pranav Kundra. All rights reserved.
//

import UIKit

class FirstViewController: UIViewController, UITableViewDataSource, UITableViewDelegate     {
  
    @IBOutlet weak var tableView: UITableView!
    
    var abilityList = [["Defense+", "Burn more calories for increasing defense."],
                    ["Critical Surge", "Increases impact of the next attack based on your vitality! (a metric based on heart rate)"],
                    ["Stun", "Attack opponents and stun them based on the number of steps you've walked."],
                    ["Tackle", "Attack your opponent directly. Based on calories burnt."],
                    ["Heal", "Increases health for the next round. Cycle more for improving your healing."],
                    ["Trip", "Attack your opponent as a percentage of his health, based on the number of steps you've walked."],]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
//        let nib = UINib(nibName: "CustomTableViewCell", bundle: nil)
        
//        tableView.registerNib(nib, forCellReuseIdentifier: "customCell")

//        tableView.registerClass(CustomTableViewCell.classForCoder(), forCellReuseIdentifier: "customCell")
        
//        tableView.registerNib(nib, forCellReuseIdentifier: "customCell")
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
        
    }

    func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return abilityList.count
    }
    
    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        let cell:CustomTableViewCell = (tableView.dequeueReusableCellWithIdentifier("customCell") as? CustomTableViewCell)!
        
        var items = abilityList[indexPath.row]
        
        cell.loadItem(title: items[0], subtitle: items[1])
        
        return cell
    }
    
    func tableView(tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
        return "Ability List"
    }
    
    override func prepareForSegue(segue: UIStoryboardSegue, sender: AnyObject?) {
        if segue.identifier=="ShowAbility" {
            
            let destinationController = segue.destinationViewController
            if let showAbilityController = destinationController.childViewControllers[0] as? ShowAbilityDetailController {
                if let cell=sender as? CustomTableViewCell {
                    if let labelText = cell.subtitleLabel?.text {
//                        print(showAbilityController)
                        showAbilityController.load(labelText)
                    }
                }
            }
        }
    }
}


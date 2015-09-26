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
    
    var abilityList = [["Ability1", "Lorem ipsum dolor sit amet, consectetur adipiscing\n elit. Etiam viverra dignissim quam, vitae venenatis urna posuere eu. Donec est dui, tincidunt nec mauris sit amet, dapibus congue felis. Quisque in massa sit amet metus placerat efficitur. Mauris egestas tortor in nisi mattis placerat. Aenean egestas elit ut ligula facilisis bibendum. In ullamcorper venenatis eros, eu mollis enim molestie id. Aliquam non sagittis mauris. Suspendisse sit amet magna a nunc consequat placerat. Morbi euismod placerat justo eget scelerisque. Nullam dictum tincidunt congue. Donec at elit vel lorem ultrices pellentesque ac malesuada arcu. Donec facilisis, felis vel dapibus finibus, dolor justo rhoncus quam, sit amet faucibus metus sapien eu velit. Donec volutpat enim vel turpis congue tincidunt. Nam efficitur quam quis quam malesuada ornare. Sed nec rhoncus orci, eu molestie orci. In hac habitasse platea dictumst."],
                    ["Ability2", "Description2"],
                    ["Ability3", "Description3"]]
    
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

